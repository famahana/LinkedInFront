import { Outlet } from "react-router-dom"
export default function LoginVerificationLayout()
{
    return(
        <div className="page">
        <main className="main"><Outlet/></main>
        </div>
    )
}