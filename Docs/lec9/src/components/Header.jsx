import { useState } from "react";
//importing link for browser routing
import {Link} from "react-router-dom"

import Logo from "../../assets/img/logo.jpeg";

function LoggedInUser() {
    //API call to check authentication
    return true;
}

const Title = ()=>{
    return (
        <>
        {/*<a href="/"> This is not effecient use Link compomnent of react*/}
        <Link to="/">
        <img 
        className="logo"
        src={Logo} alt="LOGO"/>
        </Link>
        {/* </a> */}
        </>
    )
};
const Header = ()=>{

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (<div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    Cart
                </li>
                {/* <li>
                    {
                        isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : <button onClick={()=> setIsLoggedIn( true)}>Login</button>
                    }
                </li> */}
                <li>
                    <button
                    onClick={setIsLoggedIn(!isLoggedIn)}>
                        {isLoggedIn ? "Login" : "Logout"}
                    </button>
                </li>
                </ul>
            </div>
            
        </div>); 
};

export default Header;
