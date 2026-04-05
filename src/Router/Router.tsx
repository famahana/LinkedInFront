import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../Layouts/LandingLayout";
import MainLayout from "../Layouts/MainLayout";
import RegistrationForm from "../Component/RegistrationForm";
import RegistrationLayout from "../Layouts/RegistrationLayout"
import MainPage from "../Component/MainPage"
import LoginForm from "../Component/LoginForm"
import LoginLayout from "../Layouts/LoginLayout"
import RegistrationVerificationLayout from "../Layouts/RegistrationVerificationLayout"
import RegistrationVerificationPage from "../Component/RegistrationVerification"
import LoginVerification from "../Component/LoginVerification";
import LoginVerificationLayout from "../Layouts/LoginVerificationLayout";

export const router = createBrowserRouter([
    {
        element:<LandingLayout/>,
        children:[
            {
            path:"/",
            element:<MainPage/>
            }
        ]
        

    },
    {
        element:<RegistrationLayout/>,
        children:[
            {
                path:"/registration",
                element:<RegistrationForm/>
            }
        ]
    },
    {
        element:<LoginLayout/>,
        children:[
            {
                path:"/login",
                element:<LoginForm/>
            }
        ]
    },
    {
        element:<RegistrationVerificationLayout/>,
        children:[
            {
                path:"/regverification",
                element:<RegistrationVerificationPage/>
            }
        ]
    },
    {
        element:<LoginVerificationLayout/>,
        children:[
            {
                path:"/loginverification",
                element:<LoginVerification/>
            }
        ]

    }
    
])

