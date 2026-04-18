import "../../Styles/Style.css"
import { useNavigate } from "react-router-dom"

export default function MainHeader()
{
    const navigate = useNavigate();
        const handleLinkedInButton = async () =>
        {
            navigate("/"); 
        }
        const handleMyProfileButton = async ()=>
        {
            navigate("/userpage")
        }
    return(
        <>
        <header className="header">
            <div className="container_main">  
                <div onClick={handleLinkedInButton} className="header_logo">
                    <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.1621 16.4517C35.3609 16.4517 38.4286 17.7516 40.6904 20.0656C42.9523 22.3795 44.2229 25.5179 44.2229 28.7904V43.1855H36.1824V28.7904C36.1824 27.6996 35.7588 26.6534 35.0049 25.8821C34.2509 25.1108 33.2284 24.6775 32.1621 24.6775C31.0959 24.6775 30.0733 25.1108 29.3194 25.8821C28.5654 26.6534 28.1419 27.6996 28.1419 28.7904V43.1855H20.1013V28.7904C20.1013 25.5179 21.372 22.3795 23.6338 20.0656C25.8957 17.7516 28.9634 16.4517 32.1621 16.4517V16.4517Z" fill="url(#paint0_radial_898_9647)" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.0608 18.5083H4.02026V43.1857H12.0608V18.5083Z" fill="url(#paint1_radial_898_9647)" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.04053 12.3386C10.2609 12.3386 12.0608 10.4972 12.0608 8.2257C12.0608 5.9542 10.2609 4.11279 8.04053 4.11279C5.8202 4.11279 4.02026 5.9542 4.02026 8.2257C4.02026 10.4972 5.8202 12.3386 8.04053 12.3386Z" fill="url(#paint2_radial_898_9647)" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <radialGradient id="paint0_radial_898_9647" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32.1621 29.8186) rotate(90) scale(13.3669 12.0608)">
                        <stop offset="0.2" stop-color="#6C5CE7"/>
                        <stop offset="0.55" stop-color="#6C5CE7" stop-opacity="0.75"/>
                        <stop offset="1" stop-color="#A29BFE"/>
                        </radialGradient>
                        <radialGradient id="paint1_radial_898_9647" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.04053 30.847) rotate(90) scale(12.3387 4.02027)">
                        <stop offset="0.2" stop-color="#6C5CE7"/>
                        <stop offset="0.55" stop-color="#6C5CE7" stop-opacity="0.75"/>
                        <stop offset="1" stop-color="#A29BFE"/>
                        </radialGradient>
                        <radialGradient id="paint2_radial_898_9647" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.04053 8.2257) rotate(90) scale(4.1129 4.02027)">
                        <stop offset="0.2" stop-color="#6C5CE7"/>
                        <stop offset="0.55" stop-color="#6C5CE7" stop-opacity="0.75"/>
                        <stop offset="1" stop-color="#A29BFE"/>
                        </radialGradient>
                        </defs>
                    </svg>
                 </div>
                 <div className="content_container_header">
                    <div className="search_input_container">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <input className="search_input" placeholder="Search" type="text" />
                    </div>
                    <div className="buttons_container_header">
                        <div className="buttons_main">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 11.9998L16 2.6665L28 11.9998V26.6665C28 27.3737 27.719 28.052 27.219 28.5521C26.7189 29.0522 26.0406 29.3332 25.3333 29.3332H6.66667C5.95942 29.3332 5.28115 29.0522 4.78105 28.5521C4.28095 28.052 4 27.3737 4 26.6665V11.9998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 29.3333V16H20V29.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <h1 onClick={handleLinkedInButton} className="text_main">Home</h1>
                        </div>
                        <div className="buttons_main">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_40004076_2705)">
                                <path d="M22.6668 28V25.3333C22.6668 23.9188 22.1049 22.5623 21.1047 21.5621C20.1045 20.5619 18.748 20 17.3335 20H6.66683C5.25234 20 3.89579 20.5619 2.89559 21.5621C1.8954 22.5623 1.3335 23.9188 1.3335 25.3333V28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.9998 14.6667C14.9454 14.6667 17.3332 12.2789 17.3332 9.33333C17.3332 6.38781 14.9454 4 11.9998 4C9.05432 4 6.6665 6.38781 6.6665 9.33333C6.6665 12.2789 9.05432 14.6667 11.9998 14.6667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M30.6665 28V25.3333C30.6656 24.1516 30.2723 23.0037 29.5483 22.0698C28.8243 21.1358 27.8107 20.4688 26.6665 20.1733" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.3335 4.17334C22.4807 4.46707 23.4975 5.13427 24.2237 6.06975C24.9498 7.00523 25.344 8.15578 25.344 9.34001C25.344 10.5242 24.9498 11.6748 24.2237 12.6103C23.4975 13.5457 22.4807 14.2129 21.3335 14.5067" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_40004076_2705">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                           </svg>

                          <h1 onClick={handleLinkedInButton} className="text_main">Network</h1>
                        </div>
                        <div className="buttons_main">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 10C3 8.89543 3.89543 8 5 8H27C28.1046 8 29 8.89543 29 10V26C29 27.1046 28.1046 28 27 28H5C3.89543 28 3 27.1046 3 26V10ZM27 10H5V26H27V10Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8787 4.87868C11.4413 4.31607 12.2044 4 13 4H19C19.7956 4 20.5587 4.31607 21.1213 4.87868C21.6839 5.44129 22 6.20435 22 7V27C22 27.5523 21.5523 28 21 28C20.4477 28 20 27.5523 20 27V7C20 6.73478 19.8946 6.48043 19.7071 6.29289C19.5196 6.10536 19.2652 6 19 6H13C12.7348 6 12.4804 6.10536 12.2929 6.29289C12.1054 6.48043 12 6.73478 12 7V27C12 27.5523 11.5523 28 11 28C10.4477 28 10 27.5523 10 27V7C10 6.20435 10.3161 5.44129 10.8787 4.87868Z" fill="white"/>
                          </svg>
                          <h1 onClick={handleLinkedInButton} className="text_main">Vacancies</h1>
                        </div>
                        <div className="buttons_main">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6743 5.04692C14.003 4.87951 11.3625 5.69289 9.2485 7.33436C7.13446 8.97583 5.69226 11.3325 5.19266 13.9619C4.69306 16.5914 5.17041 19.3128 6.5351 21.6152C6.67485 21.851 6.7117 22.1338 6.63703 22.3975L5.46582 26.5341L9.60243 25.3629L9.87485 26.3251L10.3847 25.4649C12.6872 26.8295 15.4086 27.3069 18.038 26.8073C20.6674 26.3077 23.0241 24.8655 24.6656 22.7515C26.3071 20.6374 27.1204 17.9969 26.953 15.3257C26.7856 12.6544 25.6489 10.1361 23.7564 8.24357C21.8638 6.35101 19.3455 5.21433 16.6743 5.04692ZM9.74396 27.4015C12.3825 28.8479 15.4464 29.3355 18.4113 28.7721C21.5194 28.1816 24.305 26.4769 26.2453 23.978C28.1856 21.4792 29.147 18.3581 28.9491 15.2006C28.7512 12.0431 27.4076 9.06641 25.1706 6.82936C22.9335 4.5923 19.9569 3.24871 16.7994 3.05084C13.6419 2.85296 10.5208 3.81439 8.02191 5.75465C5.52306 7.69491 3.81835 10.4805 3.22781 13.5886C2.66446 16.5536 3.152 19.6175 4.59848 22.256L3.53864 25.9993C3.43992 26.34 3.4342 26.7011 3.52214 27.0448C3.6105 27.3903 3.79015 27.7056 4.04227 27.9577C4.29439 28.2098 4.60969 28.3894 4.9551 28.4778C5.2989 28.5657 5.65995 28.56 6.00075 28.4613L9.74396 27.4015Z" fill="white"/>
                             <path d="M16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5Z" fill="white"/>
                             <path d="M10 17.5C10.8284 17.5 11.5 16.8284 11.5 16C11.5 15.1716 10.8284 14.5 10 14.5C9.17157 14.5 8.5 15.1716 8.5 16C8.5 16.8284 9.17157 17.5 10 17.5Z" fill="white"/>
                             <path d="M22 17.5C22.8284 17.5 23.5 16.8284 23.5 16C23.5 15.1716 22.8284 14.5 22 14.5C21.1716 14.5 20.5 15.1716 20.5 16C20.5 16.8284 21.1716 17.5 22 17.5Z" fill="white"/>
                           </svg>
                          <h1 onClick={handleLinkedInButton} className="text_main">Messages</h1>
                        </div>
                        <div className="buttons_main">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 6.0249C14.9526 6.0249 13.9156 6.23118 12.948 6.63196C11.9804 7.03274 11.1013 7.62018 10.3607 8.36073C9.62017 9.10127 9.03274 9.98043 8.63196 10.948C8.23118 11.9156 8.0249 12.9526 8.0249 13.9999C8.0249 18.6156 7.05711 21.3953 6.12842 22.9999H25.8714C24.9427 21.3953 23.9749 18.6156 23.9749 13.9999C23.9749 12.9526 23.7686 11.9156 23.3678 10.948C22.9671 9.98043 22.3796 9.10127 21.6391 8.36073C20.8985 7.62018 20.0194 7.03274 19.0518 6.63196C18.0842 6.23118 17.0472 6.0249 15.9999 6.0249ZM12.1826 4.7842C13.3929 4.28291 14.69 4.0249 15.9999 4.0249C17.3098 4.0249 18.6069 4.28291 19.8172 4.7842C21.0274 5.28549 22.127 6.02025 23.0533 6.94651C23.9795 7.87278 24.7143 8.97241 25.2156 10.1826C25.7169 11.3929 25.9749 12.69 25.9749 13.9999C25.9749 18.3333 26.8817 20.7533 27.6028 21.9989L27.6034 21.9999C27.7787 22.3034 27.8711 22.6477 27.8714 22.9981C27.8717 23.3486 27.7799 23.693 27.6052 23.9969C27.4305 24.3007 27.179 24.5533 26.8759 24.7293C26.5729 24.9054 26.2289 24.9987 25.8784 24.9999L25.8749 24.9999H6.1249L6.12137 24.9999C5.7709 24.9987 5.4269 24.9054 5.12384 24.7293C4.82078 24.5533 4.56931 24.3007 4.39461 23.9969C4.2199 23.693 4.12811 23.3486 4.12842 22.9981C4.12873 22.6477 4.22113 22.3034 4.39637 21.9999L4.39697 21.9989C5.11809 20.7533 6.0249 18.3333 6.0249 13.9999C6.0249 12.69 6.28291 11.3929 6.7842 10.1826C7.28549 8.97241 8.02024 7.87278 8.94651 6.94651C9.87277 6.02025 10.9724 5.28549 12.1826 4.7842Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C12.5523 23 13 23.4477 13 24V25C13 25.7956 13.3161 26.5587 13.8787 27.1213C14.4413 27.6839 15.2044 28 16 28C16.7956 28 17.5587 27.6839 18.1213 27.1213C18.6839 26.5587 19 25.7956 19 25V24C19 23.4477 19.4477 23 20 23C20.5523 23 21 23.4477 21 24V25C21 26.3261 20.4732 27.5979 19.5355 28.5355C18.5979 29.4732 17.3261 30 16 30C14.6739 30 13.4021 29.4732 12.4645 28.5355C11.5268 27.5979 11 26.3261 11 25V24C11 23.4477 11.4477 23 12 23Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0793 2.46634C22.3741 1.99932 22.9917 1.85971 23.4587 2.15451C25.6499 3.5377 27.4184 5.497 28.5706 7.81797C28.8162 8.31265 28.6143 8.91275 28.1196 9.15833C27.6249 9.40391 27.0248 9.20197 26.7792 8.70729C25.7902 6.71495 24.2721 5.03308 22.3911 3.84574C21.9241 3.55094 21.7845 2.93336 22.0793 2.46634Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.92054 2.46634C10.2153 2.93336 10.0757 3.55094 9.60872 3.84574C7.72779 5.03308 6.20971 6.71495 5.22063 8.70729C4.97505 9.20197 4.37495 9.40391 3.88027 9.15833C3.38559 8.91275 3.18365 8.31265 3.42923 7.81797C4.58146 5.497 6.34994 3.5377 8.54113 2.15451C9.00815 1.85971 9.62574 1.99932 9.92054 2.46634Z" fill="white"/>
                           </svg>
                          <h1 onClick={handleLinkedInButton} className="text_main">Notification</h1>
                        </div>
                    </div>
                    <div className="container_profile">
                        <img src="" alt="..." />
                        <h1 onClick={handleMyProfileButton} className="text_main">My Profile</h1>
                    </div>      
                 </div>
            </div>        
        </header>

        </>
    )

}