import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../Layouts/LandingLayout";
import MainLayout from "../Layouts/MainLayout";
import RegistrationForm from "../Component/RegistrationForm";
import RegistrationLayout from "../Layouts/RegistrationLayout"
import MainPage from "../Component/MainPage"

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
    }
    
])

