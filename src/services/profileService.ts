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
    },
    async uploadAvatar(file:File):Promise<ProfileDto>
    {
        const formData = new FormData();
        formData.append("file",file)
        return request("/Profile/upload-avatar",{
            method:"POST",
            body:formData
        });
        
    },
    async uploadBanner(file:File):Promise<ProfileDto>
    {
        const formData = new FormData();
        formData.append("file",file)
        return request("/Profile/upload-banner",{
            method:"POST",
            body:formData
        });
        
    }

}