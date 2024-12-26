import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Header = () => {
    const [isOpen , setisOpen] =useState(false)
    const toggleNavbar = () => {
        setisOpen(!isOpen)
    }
    return(
        <>
        <div className="header">
            <div className="nav-bar">
                <div >
                <FontAwesomeIcon icon={faHouse} className="header-logo" />
                </div>
                <ul className="links">
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to ="/listings">Listings</Link></li>
                    <li><Link>For Rent</Link></li>
                </ul>
                <Link to = "/signup" className="action-btn">Register/Login</Link>
                <div className="toggle-button">
                <Link onClick={toggleNavbar}><FontAwesomeIcon icon= {faBars}  /></Link>
                </div>
            </div>
        </div>
        <div className = {isOpen? "dropdown-menu open" : "dropdown-menu"}>
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Listings</Link></li>
                    <li><Link>For Rent</Link></li>
                    <li><Link to = "/signup" className="action-btn">Register/Login</Link></li>
        </div>
        </>
    )
}
export default Header