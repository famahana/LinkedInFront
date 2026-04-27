import Footer from "../Component/Footer"
import { Outlet } from "react-router-dom"
import MainHeader from "../Component/Header/MainHeader"

export default function ProfilePageMyLayout()
{
    return(
        <div className="page">
        <MainHeader/>
        <main className="main"><Outlet/></main>
        <Footer/>
        </div>
    )
}