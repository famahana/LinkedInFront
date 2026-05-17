import type { LoginDto, RegisterDto, AuthResponse, VerifyEmailDto } from "../types/auth";
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
    },
    async verifyEmail(dto: VerifyEmailDto): Promise<AuthResponse>
    {
        return request<AuthResponse>("/Verification/verify", {
            method: "POST",
            body: JSON.stringify(dto)
        });
    },
    async resendCode(email: string): Promise<{ message: string }> 
    {
        return request<{ message: string }>("/Verification/resend", {
            method: "POST",
            body: JSON.stringify(email) 
        });
    }
};
