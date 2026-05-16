import type { UserDto } from "./user";
export interface LoginDto
{
    email:string;
    password:string;
}
export interface RegisterDto
{
    email:string;
    password:string;
}
export interface AuthResponse
{
    accessToken:string;
    refreshToken:string;
    user:UserDto;
}
