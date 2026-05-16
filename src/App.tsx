
import { RouterProvider } from "react-router-dom"
import {router} from "./Router/Router"
import { AuthProvider } from "./AuthContext/AuthContext"

function App() {
  return (
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
    )
}

export default App

