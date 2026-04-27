import { useAuth } from "./AuthContext";
function UserPage()
{
    const {profile} = useAuth()
    return(
            <div className="container_userpage">
                <div className="your_profile_left_container">
                    <div className="your_profile_container">
                        <div className="your_profile">
                            <div className="your_immage">
                                <img className="your_img" src={profile?.avatarUrl} alt="" />
                            </div>
                            <div className="your_info">
                                    <h1 className="your_info_text_1">{profile?.firstName} {profile?.lastName}</h1> 
                                    <h1 className="your_info_text_2">{profile?.position} / {profile?.company}</h1>
                                </div>
                            
                        </div>
                        <div className="your_contacts">
                                <div className="your_expand">
                                    <h1 className="contacts_text">Contacts</h1>
                                    <h1 className="expand_text">Expand your network of contacts</h1>
                                </div>
                            </div>
                    </div>
                    <div className="saved_elements_container">
                        <div className="saved_elements">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h1 className="saved_elements_text">Saved elements</h1>
                        </div>
                    </div>
                </div>
            </div>
    )

}
export default UserPage