import LandingHeader from "../Component/Header/LandingHeader"
import Footer from "../Component/Footer"
import { Outlet } from "react-router-dom"

export default function UserPageLayout()
{
    return(
        <div className="page">
        <LandingHeader/>
        <main className="main"><Outlet/></main>
        <Footer/>
        </div>
    )
}