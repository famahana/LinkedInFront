import { Link } from "react-router-dom"
function RegistrationVerification()
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
                        <h1 className="text_welcome">One last step</h1>
                        <h1 className="text_professional">enter the verification code</h1>
                        </div>
                        <div className="inputs_container">
                            <div className="ver_container">
                                <input className="input_ver" type="text" maxLength={1} name="" id="" />
                                <input className="input_ver" type="text" maxLength={1} name="" id="" />
                                <input className="input_ver" type="text" maxLength={1} name="" id="" />
                                <input className="input_ver" type="text" maxLength={1} name="" id="" />
                                <input className="input_ver" type="text" maxLength={1} name="" id="" />

                            </div>            
                            <div className="button_container">
                            <div className="sign_up_button_container">
                                <button className="sign_up_button">Submit</button>
                            </div>
                             <h1 className="signup_text">Didn`t receive the code? <Link to="/" className="privacy_text">Send the code again</Link></h1>  
                            </div>
                        </div>
                    </div>
                    <div className="back_container">
                        <button className="back_button">Back</button>
                    </div>
                </div>
            </div>
    
        </div>


    )

}

export default RegistrationVerification