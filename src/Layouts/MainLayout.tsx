import { Outlet } from "react-router-dom"
import MainHeader from "../Component/Header/MainHeader"
import Footer from "../Component/Footer"


export default function MainLayout()
{
    return(
        <>
        <MainHeader/>
        <main><Outlet/></main>
        <Footer/>
        </>
    )
}