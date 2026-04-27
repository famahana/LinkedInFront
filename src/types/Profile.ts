export interface ProfileDto
{
    firstName: string;
    lastName: string;
    avatarUrl: string;
    bannerUrl: string;
    company: string;
    position: string;
    location:string;
}
export interface UpdateProfileDto
{
    firstName: string;
    lastName: string;
    company: string;
    position: string;
    location:string;
}