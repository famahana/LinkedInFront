import { useState,useEffect } from "react"
import { useAuth } from "./AuthContext"
import { profileService } from "../services/profileService"
import { type UpdateProfileDto, type ProfileDto } from "../types/Profile"

function ProfilePageMy()
{
    const {profile,setProfile} = useAuth()
    const [isEditing,setIsEditing] = useState(false)
    const[form,setForm] = useState<UpdateProfileDto>({
        firstName: profile?.firstName || "",
        lastName: profile?.lastName || "",
        company: profile?.company || "",
        position:profile?.position||"",
        location: profile?.location || ""
    })
    useEffect(() => {
    if (profile) {
        setForm({
            firstName: profile.firstName || "",
            lastName: profile.lastName || "",
            company: profile.company || "",
            position:profile.position || "",
            location: profile.location || ""
        });
    }
    }, [profile]);
    const handleSave = async ()=>{
        try{
            const updated  = await profileService.updateProfile(form);
            setProfile(updated)
            setIsEditing(false)
        }catch (e)
        {
            console.error(e)
            alert("failed to update profile")
        }
    };
    return(
        <div className="container_profile_page">
            <div className="profile_banner" style={{backgroundImage: `url(${profile?.bannerUrl})`,}}>
                <div className="edit_profile_button_container">
                    <button className="button_edit_banner">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1679 4.4453C11.3534 4.1671 11.6656 4 12 4H20C20.3344 4 20.6466 4.1671 20.8321 4.4453L22.5352 7H26C26.7957 7 27.5587 7.31607 28.1213 7.87868C28.6839 8.44129 29 9.20435 29 10V24C29 24.7957 28.6839 25.5587 28.1213 26.1213C27.5587 26.6839 26.7957 27 26 27H6C5.20435 27 4.44129 26.6839 3.87868 26.1213C3.31607 25.5587 3 24.7957 3 24V10C3 9.20435 3.31607 8.44129 3.87868 7.87868C4.44129 7.31607 5.20435 7 6 7H9.46482L11.1679 4.4453ZM12.5352 6L10.8321 8.5547C10.6466 8.8329 10.3344 9 10 9H6C5.73478 9 5.48043 9.10536 5.29289 9.29289C5.10536 9.48043 5 9.73478 5 10V24C5 24.2652 5.10536 24.5196 5.29289 24.7071C5.48043 24.8946 5.73478 25 6 25H26C26.2652 25 26.5196 24.8946 26.7071 24.7071C26.8946 24.5196 27 24.2652 27 24V10C27 9.73478 26.8946 9.48043 26.7071 9.29289C26.5196 9.10536 26.2652 9 26 9H22C21.6656 9 21.3534 8.8329 21.1679 8.5547L19.4648 6H12.5352Z" fill="#6C5CE7"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 13C14.067 13 12.5 14.567 12.5 16.5C12.5 18.433 14.067 20 16 20C17.933 20 19.5 18.433 19.5 16.5C19.5 14.567 17.933 13 16 13ZM10.5 16.5C10.5 13.4624 12.9624 11 16 11C19.0376 11 21.5 13.4624 21.5 16.5C21.5 19.5376 19.0376 22 16 22C12.9624 22 10.5 19.5376 10.5 16.5Z" fill="#6C5CE7"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="profile_content_container">
                <div className="profile_content">
                    <img className="profile_avatar" src={profile?.avatarUrl} alt="" />
                </div>
            <div className="profile_info">
                {isEditing?(
                    <div>
                        <input placeholder="first name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })}/>
                        <input placeholder="last name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })}/>
                    </div>
                ): (
                    <h1 className="profile_name">{profile?.firstName} {profile?.lastName}</h1>
                )}
                {isEditing?(
                    <div>
                        <input placeholder="company" value={form.company}onChange={(e) => setForm({ ...form, company: e.target.value })} />
                        <input placeholder="position" value={form.position}onChange={(e) => setForm({ ...form, position: e.target.value })} />
                    </div>
                ):(
                    <p className="profile_position">{profile?.position} \ {profile?.company}</p>
                )}
                {isEditing?(
                    <div>
                        <input placeholder="location" value={form.location}onChange={(e) => setForm({ ...form, location: e.target.value })} />
                    </div>
                ):(
                    <p className="profile_location">{profile?.location}</p>
                )}
                {isEditing && (
                    <div className="edit_actions">
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                )}
                <p className="change_your_link">Change your custom portfolio link <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 7H17V17" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </p>
                <p className="edit_contact">Edit contact information</p>
            </div>
            <div className="profile_buttons">
                <button className="btn_primary"><h1 className="text_primary">Open to</h1></button>
                <button className="btn_secondary"><h1 className="text_secondary">Add profile section</h1></button>
                <button className="btn_secondary_2"><h1 className="text_secondary_2">More</h1></button>
                 <button className="edit_profile_btn" onClick={()=> setIsEditing(true)}> 
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.6665 19.5466V26.6666C26.6665 27.3738 26.3856 28.0521 25.8855 28.5522C25.3854 29.0523 24.7071 29.3333 23.9998 29.3333H5.33317C4.62593 29.3333 3.94765 29.0523 3.44755 28.5522C2.94746 28.0521 2.6665 27.3738 2.6665 26.6666V7.99992C2.6665 7.29267 2.94746 6.6144 3.44755 6.1143C3.94765 5.6142 4.62593 5.33325 5.33317 5.33325H12.4532" stroke="#2D3436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23.9998 2.66675L29.3332 8.00008L15.9998 21.3334H10.6665V16.0001L23.9998 2.66675Z" stroke="#2D3436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            </div>
        </div>
    )
    
}
export default ProfilePageMy