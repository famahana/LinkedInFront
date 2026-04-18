import LandingHeader from "../Component/Header/LandingHeader"
import Footer from "../Component/Footer"
import { Outlet } from "react-router-dom"
import MainHeader from "../Component/Header/MainHeader"

export default function UserPageLayout()
{
    return(
        <div className="page">
        <MainHeader/>
        <main className="main"><Outlet/></main>
        <Footer/>
        </div>
    )
}