import { Link } from "react-router-dom";
export default function Footer()
{
    return(
        <>
        <footer className="footer">
            <div className="content_footer">
                <div className="content_footer_info">
                    <div className="general_information">
                        <Link to="/" className="footer-link">General information</Link>
                        <Link to="/" className="footer-link">Careers</Link>
                        <Link to="/" className="footer-link">Ad Settings</Link>
                        <Link to="/" className="footer-link">Security Center</Link>
                    </div>
                    <div className="accessibility_information">
                        <Link to="/" className="footer-link">Accessibility</Link>
                        <Link to="/" className="footer-link">Privacy and Terms</Link>
                        <Link to="/" className="footer-link">Mobile Phone</Link>
                        </div>
                    <div className="policies_information">
                        <Link to="/" className="footer-link">Policies for the Professional Community</Link>
                        <Link to="/" className="footer-link">Sales Solutions</Link>
                        <Link to="/" className="footer-link">Advertising Solutions</Link>
                        </div>
                </div>
                <div className="content_footer_info_2">
                    <div className="content_question">
                        
                        </div>
                    <div className="content_manage_account">
                       
                    </div>
                    <div className="content_recomendation">
                        
                        </div>
                </div>
            </div>

        </footer>
        
        </>
    )
}