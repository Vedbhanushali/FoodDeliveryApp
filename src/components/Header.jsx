import { useState } from "react";
import {Link} from "react-router-dom"

import Logo from "../../assets/img/logo.jpeg";

function LoggedInUser() {
    return true;
}
const Title = ()=>{
    return (
        <>
            <Link to="/">
            <img 
            className="h-20 pl-6"
            src={Logo} alt="LOGO"/>
            </Link>
        </>
    )
};
const Header = ()=>{

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (<div className="flex justify-between bg-pink-200 shadow-xl">
            <Title />
            <div className="flex">
                <ul className="flex py-10 px-2">
                <li className="px-2">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="px-2">
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li className="px-2">
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                <li className="px-2">
                    <Link to="/instamart">
                        Instamart
                    </Link>
                </li>
                    <li className="px-2" >Cart</li>
                    <li className="px-2">
                    {
                        isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : <button onClick={()=> setIsLoggedIn( true)}>Login</button>
                    }
                    </li>
                </ul>
            </div>
            
        </div>); 
};

export default Header;
