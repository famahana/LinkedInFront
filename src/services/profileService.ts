import { request } from "../Api/api";
import type { ProfileDto } from "../types/Profile";
export const profileService = {
    async getMyProfile():Promise<ProfileDto>
    {
        return request<ProfileDto>("/Profile/me")
    }

}