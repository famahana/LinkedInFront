import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../Layouts/LandingLayout";
import MainLayout from "../Layouts/MainLayout";
import MainPage from "../MainPage"

export const router = createBrowserRouter([
    {
        element:<LandingLayout/>,
        children:[
            {
            path:"/",
            element:<MainPage/>
            }
        ]

    }
])

