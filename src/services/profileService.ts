import { request } from "../Api/api";
import type { ProfileDto, UpdateProfileDto } from "../types/Profile";
export const profileService = {
    async getMyProfile():Promise<ProfileDto>
    {
        return request<ProfileDto>("/Profile/me")
    },
    async updateProfile(data:UpdateProfileDto):Promise<ProfileDto>
    {
        return request ("/Profile/me",{
            method:"PUT",
            body:JSON.stringify(data)
        });

    }

}