import LandingHeader from "../Component/Header/LandingHeader"
import Footer from "../Component/Footer"
import { Outlet } from "react-router-dom"
import MainHeader from "../Component/Header/MainHeader"
import { useAuth } from "../Component/AuthContext"

export default function LandingLayout()
{
    // const token = localStorage.getItem("token")
    const {token} = useAuth();
    return(
        <div className="page">
            {token? <MainHeader/>:<LandingHeader/>}
            <main className="main"><Outlet/></main>
            <Footer/>
        </div>
    )
}