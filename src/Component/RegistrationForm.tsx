import { Link } from "react-router-dom"
function RegistrationForm()
{
    return(
        <div className="registration_form">
            <div className="container_logo">
                 <div className="header_logo_reg">
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
                 </div>
            <div className="hero_reg">
                <div className="hero_reg_inner">
                    <div className="reg_container">
                        <div className="reg_text">
                        <h1 className="text_welcome">Welcome to your</h1>
                        <h1 className="text_professional">professional community</h1>
                        </div>
                        <div className="inputs_container">
                            <div className="inputs">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 5.25C2.25 4.83579 2.58579 4.5 3 4.5H21C21.4142 4.5 21.75 4.83579 21.75 5.25V18C21.75 18.3978 21.592 18.7794 21.3107 19.0607C21.0294 19.342 20.6478 19.5 20.25 19.5H3.75C3.35218 19.5 2.97065 19.342 2.68934 19.0607C2.40804 18.7794 2.25 18.3978 2.25 18V5.25ZM3.75 6V18H20.25V6H3.75Z" fill="#6C5CE7"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.44714 4.74321C2.72703 4.43787 3.20146 4.41724 3.5068 4.69714L12 12.4826L20.4932 4.69714C20.7985 4.41724 21.273 4.43787 21.5529 4.74321C21.8328 5.04855 21.8121 5.52298 21.5068 5.80287L12.5068 14.0529C12.2201 14.3157 11.78 14.3157 11.4932 14.0529L2.49321 5.80287C2.18787 5.52298 2.16724 5.04855 2.44714 4.74321Z" fill="#6C5CE7"/>
                                </svg>
                                <input type="email" placeholder="Email or phone number" className="input" />
                            </div>
                            <div className="inputs">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 12C11.3787 12 10.875 12.5037 10.875 13.125C10.875 13.7463 11.3787 14.25 12 14.25C12.6213 14.25 13.125 13.7463 13.125 13.125C13.125 12.5037 12.6213 12 12 12ZM9.375 13.125C9.375 11.6753 10.5503 10.5 12 10.5C13.4497 10.5 14.625 11.6753 14.625 13.125C14.625 14.5747 13.4497 15.75 12 15.75C10.5503 15.75 9.375 14.5747 9.375 13.125Z" fill="#6C5CE7"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25V15C11.25 14.5858 11.5858 14.25 12 14.25Z" fill="#6C5CE7"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9C3 8.17157 3.67157 7.5 4.5 7.5H19.5C20.3284 7.5 21 8.17157 21 9V19.5C21 20.3284 20.3284 21 19.5 21H4.5C3.67157 21 3 20.3284 3 19.5V9ZM19.5 9H4.5V19.5H19.5V9Z" fill="#6C5CE7"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C11.3038 2.25 10.6361 2.52656 10.1438 3.01884C9.65156 3.51113 9.375 4.17881 9.375 4.875V8.25C9.375 8.66421 9.03921 9 8.625 9C8.21079 9 7.875 8.66421 7.875 8.25V4.875C7.875 3.78098 8.3096 2.73177 9.08318 1.95818C9.85677 1.1846 10.906 0.75 12 0.75C13.094 0.75 14.1432 1.1846 14.9168 1.95818C15.6904 2.73177 16.125 3.78098 16.125 4.875V8.25C16.125 8.66421 15.7892 9 15.375 9C14.9608 9 14.625 8.66421 14.625 8.25V4.875C14.625 4.17881 14.3484 3.51113 13.8562 3.01884C13.3639 2.52656 12.6962 2.25 12 2.25Z" fill="#6C5CE7"/>
                                </svg>
                                <input type="password" placeholder="Password" className="input" />
                                <button className="input_showpassword">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                </button>
                                
                            </div>
                            <div className="inputs">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 12C11.3787 12 10.875 12.5037 10.875 13.125C10.875 13.7463 11.3787 14.25 12 14.25C12.6213 14.25 13.125 13.7463 13.125 13.125C13.125 12.5037 12.6213 12 12 12ZM9.375 13.125C9.375 11.6753 10.5503 10.5 12 10.5C13.4497 10.5 14.625 11.6753 14.625 13.125C14.625 14.5747 13.4497 15.75 12 15.75C10.5503 15.75 9.375 14.5747 9.375 13.125Z" fill="#6C5CE7"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25V15C11.25 14.5858 11.5858 14.25 12 14.25Z" fill="#6C5CE7"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9C3 8.17157 3.67157 7.5 4.5 7.5H19.5C20.3284 7.5 21 8.17157 21 9V19.5C21 20.3284 20.3284 21 19.5 21H4.5C3.67157 21 3 20.3284 3 19.5V9ZM19.5 9H4.5V19.5H19.5V9Z" fill="#6C5CE7"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C11.3038 2.25 10.6361 2.52656 10.1438 3.01884C9.65156 3.51113 9.375 4.17881 9.375 4.875V8.25C9.375 8.66421 9.03921 9 8.625 9C8.21079 9 7.875 8.66421 7.875 8.25V4.875C7.875 3.78098 8.3096 2.73177 9.08318 1.95818C9.85677 1.1846 10.906 0.75 12 0.75C13.094 0.75 14.1432 1.1846 14.9168 1.95818C15.6904 2.73177 16.125 3.78098 16.125 4.875V8.25C16.125 8.66421 15.7892 9 15.375 9C14.9608 9 14.625 8.66421 14.625 8.25V4.875C14.625 4.17881 14.3484 3.51113 13.8562 3.01884C13.3639 2.52656 12.6962 2.25 12 2.25Z" fill="#6C5CE7"/>
                                </svg>
                                <input type="password" placeholder="Confirm password" className="input" />
                                <button className="input_showpassword">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                </button>
                            </div>
                            <div className="button_container">
                            <div className="sign_up_button_container">
                                <button className="sign_up_button">Sign Up</button>
                            </div>
                                <h1 className="signup_text">By Signing Up, you agree to our <Link to="/" className="privacy_text">Terms of Service</Link> and <Link to="/" className="privacy_text">Privacy Policy</Link> </h1>
                            </div>
                        </div>
                    </div>
                    <div className="or_container">
                         <svg width="400" height="15" viewBox="0 0 400 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M197.209 14.192C196.377 14.192 195.625 14 194.953 13.616C194.281 13.2213 193.747 12.6827 193.353 12C192.958 11.3173 192.761 10.544 192.761 9.68C192.761 8.816 192.953 8.048 193.337 7.376C193.731 6.704 194.265 6.17067 194.937 5.776C195.609 5.38133 196.366 5.184 197.209 5.184C198.041 5.184 198.793 5.38133 199.465 5.776C200.137 6.16 200.665 6.688 201.049 7.36C201.443 8.032 201.641 8.80533 201.641 9.68C201.641 10.5547 201.438 11.3333 201.033 12.016C200.627 12.688 200.089 13.2213 199.417 13.616C198.755 14 198.019 14.192 197.209 14.192ZM197.209 12.752C197.742 12.752 198.222 12.6187 198.649 12.352C199.086 12.0853 199.427 11.7173 199.673 11.248C199.929 10.7787 200.057 10.256 200.057 9.68C200.057 9.09333 199.929 8.576 199.673 8.128C199.427 7.66933 199.086 7.30667 198.649 7.04C198.222 6.76267 197.742 6.624 197.209 6.624C196.665 6.624 196.174 6.76267 195.737 7.04C195.31 7.30667 194.969 7.66933 194.713 8.128C194.457 8.576 194.329 9.09333 194.329 9.68C194.329 10.256 194.457 10.7787 194.713 11.248C194.969 11.7173 195.31 12.0853 195.737 12.352C196.174 12.6187 196.665 12.752 197.209 12.752ZM203.581 14V5.376H205.037V6.96L204.877 6.736C205.08 6.24533 205.389 5.88267 205.805 5.648C206.221 5.40267 206.728 5.28 207.325 5.28H207.853V6.688H207.101C206.493 6.688 206.003 6.88 205.629 7.264C205.256 7.63733 205.069 8.17067 205.069 8.864V14H203.581Z" fill="#2D3436"/>
                        <path d="M0 10L172.864 10" stroke="#2D3436" stroke-width="0.5"/>
                        <path d="M227.136 10L400 10" stroke="#2D3436" stroke-width="0.5"/>
                        </svg>
                    </div>
                    <div className="continue_container">
                        <div className="continue_google_container">
                            <div className="continue_google">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.99996 3.5625C10.3275 3.5625 11.5162 4.02 12.4537 4.9125L15.0225 2.34375C13.4625 0.8925 11.4262 0 8.99996 0C5.48246 0 2.44121 2.0175 0.959961 4.9575L3.95246 7.27875C4.66121 5.145 6.65246 3.5625 8.99996 3.5625Z" fill="#EA4335"/>
                                <path d="M17.6175 9.20625C17.6175 8.6175 17.5612 8.0475 17.475 7.5H9V10.8825H13.8525C13.635 11.9925 13.005 12.9375 12.06 13.575L14.9588 15.825C16.65 14.2575 17.6175 11.94 17.6175 9.20625Z" fill="#4285F4"/>
                                <path d="M3.94875 10.7213C3.76875 10.1775 3.66375 9.60002 3.66375 9.00002C3.66375 8.40002 3.765 7.82252 3.94875 7.27877L0.95625 4.95752C0.345 6.17252 0 7.54502 0 9.00002C0 10.455 0.345 11.8275 0.96 13.0425L3.94875 10.7213Z" fill="#FBBC05"/>
                                <path d="M9.00005 17.9998C11.43 17.9998 13.4738 17.201 14.9588 15.821L12.06 13.571C11.2538 14.1148 10.215 14.4335 9.00005 14.4335C6.65255 14.4335 4.6613 12.851 3.9488 10.7173L0.956299 13.0385C2.4413 15.9823 5.48255 17.9998 9.00005 17.9998Z" fill="#34A853"/>
                                </svg>
                                <button className="google_button">Continue with Google</button>
                            </div>

                        </div>
                        <div className="sign_in_container_continue">
                            <div className="continue_google_container">
                                <div className="sign_in_container_reg">
                                    <button className="signin_button">Sign In</button>
                                </div>
                       </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>


    )

}

export default RegistrationForm