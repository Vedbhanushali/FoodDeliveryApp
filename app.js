console.log("App js is running");
//imported react from node modules
import React from "react";
import ReactDOM from "react-dom/client";
/*
        * Header
        *  - Logo
        *  - Nav Items
        *  - cart
        * Body
        *   - Search bar
        *   - RestrauntList
        *   - RestaurantCard
        *        - image
        *        - name
        *        - rating
        *        - cusines
        * Footer
        *   - links
        */
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
} ;
const Body = ()=>{
    return (
        <div></div>
    );
};
const Footer = ()=>{
    return (
        <div></div>
    );
};

//any JSX component there can only be one component
// to resolve this  we can containerize all the tags in one div tag
// or there is one another method by react - React.Fragment which will not create extra div tags during rendering
// const AppLayout = ()=>{
//     return (
//         <div>
//         <Header/>
//         <Body />
//         <Footer />
//         </div>
//     );
// };
const AppLayout = ()=>{
    return (
        <React.Fragment>
            <Header/>
            <Body />
            <Footer />
        </React.Fragment>
    )
}
//we can also use above code [diffrent syntax]
// const AppLayout = ()=>{
//     return (
//         <>
//             <Header/>
//             <Body />
//             <Footer />
//         </>
//     )
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);