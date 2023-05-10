//we can name this file extension as js or jsx both are correct
// jsx is just not a normal js file so normally developers rename it to jsx

import { useState } from "react";


//inline styling=====END==================

function LoggedInUser() {
    //API call to check authentication
    return true;
}
const Title = ()=>{
    return (
        <a href="/">
        <img 
        className="logo"
        src="https://tmlogosave.s3.ap-south-1.amazonaws.com/5653883.jpeg" alt="LOGO"/>
        </a>
    )
};
const Header = ()=>{

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (<div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {
                //only JS expression works here not JS statements
                // This will not work
                // let a =10;
                // console.log(a);

                // To run above statement
                ((a=10),console.log(a))
            }
            {
                isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : <button onClick={()=> setIsLoggedIn( true)}>Login</button>
            }
        </div>); //need to wrap in () when writing in multiple line
};

export default Header;
