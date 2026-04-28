import Cookies from "js-cookie";
const API_URL = "https://localhost:7271/api";

export async function request<T>(
    url: string,
    options: RequestInit = {}
): Promise<T>
{
    const token = Cookies.get("token");

   const response = await fetch(`${API_URL}${url}`, {
        ...options,
        headers: {
            ...(options.body instanceof FormData
                ? {}
                : { "Content-Type": "application/json" }),
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers
        }
    });
    let data = null;

    try
    {
        data = await response.json();
    }
    catch
    {
        data = null;
    }
    if(response.status ===401)
    {
        Cookies.remove("token");
        Cookies.remove("user");
        throw new Error("Session expired");
    }

    if (!response.ok)
    {
        throw{
            status:response.status,
            message:data?.message || "Request failed"
        }
        
        
        
    }

    return data;
}