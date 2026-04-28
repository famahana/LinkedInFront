import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { postService } from "../services/postService";
import { type PostDto } from "../types/post";
function UserPage()
{
    const {profile} = useAuth()
    const [content,setContent] = useState("");
    const handleCreate = async () => {
        const newPost = await postService.createPost(content);
        setPosts(prev => [newPost,...prev]);
        setContent("")
    }
    const [posts,setPosts] = useState<PostDto[]>([]);
    useEffect(()=>{
        postService.getPosts().then(setPosts);
        
    },[])
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
                <div className="conatiner_posts">
                    <div className="create_post_container">
                        <div className="create_post">
                            <img className="avatar_post" src={profile?.avatarUrl} alt="" />
                            <div className="text_post_container">
                                <input value={content} onChange={(e) => setContent(e.target.value)} className="create_post_text" placeholder="Start your post" type="text" />
                                <button onClick={handleCreate}>Post</button>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="buttons_container_post">
                            <div className="buttons_container_2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_40004108_2307)">
                                    <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_40004108_2307">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <button className="buttons_post">Photo</button>
                            </div>
                            <div className="buttons_container_2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_40004108_3453)">
                                    <path d="M23 7L16 12L23 17V7Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_40004108_3453">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <button className="buttons_post">Video</button>
                            </div>
                            <div className="buttons_container_2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.5C3 3.67157 3.67157 3 4.5 3H19.5C20.3284 3 21 3.67157 21 4.5V19.5C21 20.3284 20.3284 21 19.5 21H4.5C3.67157 21 3 20.3284 3 19.5V4.5ZM19.5 4.5H4.5V19.5H19.5V4.5Z" fill="#6C5CE7"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.5C16.9142 1.5 17.25 1.83579 17.25 2.25V5.25C17.25 5.66421 16.9142 6 16.5 6C16.0858 6 15.75 5.66421 15.75 5.25V2.25C15.75 1.83579 16.0858 1.5 16.5 1.5Z" fill="#6C5CE7"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1.5C7.91421 1.5 8.25 1.83579 8.25 2.25V5.25C8.25 5.66421 7.91421 6 7.5 6C7.08579 6 6.75 5.66421 6.75 5.25V2.25C6.75 1.83579 7.08579 1.5 7.5 1.5Z" fill="#6C5CE7"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8.25C3 7.83579 3.33579 7.5 3.75 7.5H20.25C20.6642 7.5 21 7.83579 21 8.25C21 8.66421 20.6642 9 20.25 9H3.75C3.33579 9 3 8.66421 3 8.25Z" fill="#6C5CE7"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9209 11.4857C16.2049 11.7872 16.1908 12.2618 15.8893 12.5459L11.5112 16.6709C11.2216 16.9437 10.7694 16.9429 10.4807 16.6691L8.10884 14.4191C7.80832 14.1341 7.79581 13.6593 8.08088 13.3588C8.36595 13.0583 8.84066 13.0458 9.14117 13.3309L10.9986 15.0929L14.8607 11.4541C15.1622 11.1701 15.6368 11.1842 15.9209 11.4857Z" fill="#6C5CE7"/>
                                </svg>
                                <button className="buttons_post">Event</button>
                            </div>
                           

                        </div>
                    </div>
                    <div className="posts_container">
                        {posts.map(post => (
                            <div key={post.id} className="post">
                            <div className="creator_information">
                                <img className="post_creator_image" src={post.authorAvatar} alt="" />
                                <div className="about">
                                    <h1 className="your_info_text_1">{post.firstName} {post.lastName}</h1>
                                    <h1 className="your_info_text_2">{post.position}/{post.company}</h1>
                                    <h1 className="created_at">{new Date(post.createdAt).toLocaleDateString()}</h1>
                                </div>
                            </div>
                            <div className="post_content">
                                <div className="post_text">
                                    {post.content}

                                </div>
                            </div>
                            <div className="_" >

                            </div>
                        </div>


                        ))}
                        

                    </div>
                    
                </div>
            </div>

    )

}
export default UserPage