import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/userContext";
import Logo from "../../assets/img/logo.jpeg";

const Title = () => {
    return (
        <>
            <Link to="/">
                <img
                    className="h-20 pl-6"
                    src={Logo} alt="LOGO" />
            </Link>
        </>
    )
};

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline()
    const { user } = useContext(UserContext)

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
                <li className="px-2">
                    Cart
                </li>
                <li className="px-2">
                    {isOnline ? "online" : "offline"}
                </li>
                <li className="px-2">
                    {user.name}
                </li>
                <li className="px-2">
                    <button
                        onClick={() => setIsLoggedIn(!isLoggedIn)}>
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>
                </li>

            </ul>
        </div>

    </div>);
};

export default Header;
