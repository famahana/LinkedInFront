import { Link } from "react-router-dom";
function MainPage()
{
    return(
        <div className="main_page">
            <div className="hero">
                <div className="hero_inner">
                <div className="hero_left">
                    <h1 className="text">
                        Welcome to the community specialists!
                    </h1>
                    <div className="hero_buttons">
                        <button className="login_google">
                            Login with Google
                        </button>
                        <button className="login_email">
                            Login by email addressd
                        </button>
                    </div>
                    <div className="privacy">
                        <h1 className="text_privacy">
                            By clicking "Continue" to join or sign in, you agree to the terms of the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.
                        </h1>
                    </div>
                    <div className="not_on">
                        <Link to="/" className="not_on_text">Not on LinkedIn? Join</Link>
                    </div>
                </div>
                <div className="hero_right">
                    <img className="img" src="src\assets\illustration.png" alt="img" />
                </div>
            </div>
            </div>
            <div className="background">   
                        <div className="back_hero_inner">
                            <div className="back_hero_left">
                                <h1 className="text_2">
                                    Find a suitable vacancy or internship
                                </h1>
                            </div>
                            <div className="back_hero_right">
                                <div className="group_container">
                                    <div className="buttons_group">
                                    <button>Engineering</button>
                                    <button>Business development</button>
                                    <button>Finance</button>
                                    <button>Administrative Assistant</button>
                                    <button>Retail employee</button>
                                    <button>Help Desk</button>
                                    <button>Operations</button>
                                    <button>Information Technology</button>
                                    <button>Marketing</button>
                                    <button>Personnel support</button>
                                    <button>Education</button>
                                    <button>Salse</button>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
            <div className="post_vacancy">
                <h1 className="text_3">
                    Post your vacancy so millions of people can see it
                </h1>
                <button className="post_btn">Post a vacancy</button>
            </div>
            <div className="section_light">
                <div className="section_hero_inner">
                    <div className="section_hero_left">
                        <h1 className="text_discover">Discover the best software tools</h1>
                        <h1 className="text_connect">Connect with buyers who have first-hand experience to find the best products for you.</h1>
                    </div>
                    <div className="section_hero_right">
                        <div className="group_container">
                                    <div className="buttons_group">
                                    <button>E-commerce platforms</button>
                                    <button>Recruiting Software</button>
                                    <button>Software fro CRM systems</button>
                                    <button>Social Networking Software</button>
                                    <button>HR systems</button>
                                    <button>Project Management Software</button>
                                    </div>
                                </div>
                    </div>
                </div>

            </div>
            <div className="container_last">
                <div className="container_last_inner">
                    <div className="container_g">
                        <h1 className="text_last">Connect with your colleagues, classmates and friends on LinkedIn.</h1>
                        <div className="container_l"><button className="button_end">Login</button></div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default MainPage