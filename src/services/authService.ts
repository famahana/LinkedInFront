import type { LoginDto, RegisterDto, AuthResponse } from "../types/auth";
import { request } from "../Api/api";

export const authService = {
    async login(dto: LoginDto): Promise<AuthResponse>
    {
        return request<AuthResponse>("/User/login", {
            method: "POST",
            body: JSON.stringify(dto)
        });
    },

    async register(dto: RegisterDto): Promise<void>
    {
        await request<void>("/User", {
            method: "POST",
            body: JSON.stringify(dto)
        });
    }
};