import LandingHeader from "../Component/Header/LandingHeader"
import Footer from "../Component/Footer"
import { Outlet } from "react-router-dom"
import MainHeader from "../Component/Header/MainHeader"

export default function LandingLayout()
{
    const token = localStorage.getItem("token")
    return(
        <div className="page">
            {token? <MainHeader/>:<LandingHeader/>}
            <main className="main"><Outlet/></main>
            <Footer/>
        </div>
    )
}