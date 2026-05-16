import Cookies from "js-cookie";

const API_URL = "https://localhost:7271/api";

export async function request<T>(url: string, options: RequestInit = {}): Promise<T> {
    const token = Cookies.get("token");
    const fetchOptions: RequestInit = {
        ...options,
        headers: {
          
            ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers
        }
    };


    let response = await fetch(`${API_URL}${url}`, fetchOptions);


    if (response.status === 401 && url !== "/auth/refresh") {
        const currentRefreshToken = Cookies.get("refreshToken");

        if (currentRefreshToken) {
            try {
                const refreshResponse = await fetch(`${API_URL}/auth/refresh`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        accessToken: token || "", 
                        refreshToken: currentRefreshToken
                    })
                });

                if (refreshResponse.ok) {
                    const refreshData = await refreshResponse.json();

                    Cookies.set("token", refreshData.accessToken, { expires: 7, secure: true, sameSite: 'strict' });
                    Cookies.set("refreshToken", refreshData.refreshToken, { expires: 7, secure: true, sameSite: 'strict' });


                    (fetchOptions.headers as any)["Authorization"] = `Bearer ${refreshData.accessToken}`;

                    response = await fetch(`${API_URL}${url}`, fetchOptions);
                } else {
                    throw new Error("Refresh failed");
                }
            } catch {
                Cookies.remove("token");
                Cookies.remove("refreshToken");
                Cookies.remove("user");
                window.location.href = "/login";
                throw new Error("Session expired");
            }
        }
    }

    let data = null;
    try {
        data = await response.json();
    } catch {
        data = null;
    }

    if (!response.ok) {
        throw {
            status: response.status,
            message: data?.message || "Request failed"
        };
    }

    return data;
}