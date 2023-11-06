//we can name this file extension as js or jsx both are correct
// jsx is just not a normal js file so normally developers rename it to jsx

//inline styling=====END==================
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
        </div>); //need to wrap in () when writing in multiple line
};

export default Header;
