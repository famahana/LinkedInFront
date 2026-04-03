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
            </div>
        </div>
    )

}
export default MainPage