import { Outlet } from "react-router-dom"
import SignupForm from "./Components/SignupForm"
import Header from "./Components/Header"
import Home from "./Home"
const Layout = () => {
    return(
        <>
        <Header/>
        
        <Outlet/>
        </>
    )
}

export default Layout