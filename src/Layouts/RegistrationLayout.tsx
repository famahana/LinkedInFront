import { Outlet } from "react-router-dom"
export default function RegistrationLayout()
{
    return(
        <div className="page">
        <main className="main"><Outlet/></main>
        </div>
    )
}