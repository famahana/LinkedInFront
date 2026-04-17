const API_URL = "https://localhost:7271/api";

export async function request<T>(
    url: string,
    options: RequestInit = {}
): Promise<T>
{
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}${url}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers
        }
    });

    if (!response.ok)
    {
        throw new Error("Request failed");
    }

    return response.json();
}