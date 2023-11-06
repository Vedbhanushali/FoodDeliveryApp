console.log("App is running");
//imported react from node modules
import React from "react";
import ReactDOM from "react-dom/client";

//importing Header
import Header from "./components/Header";

//importing Body
import Body from "./components/Body";

//importing Footer
import Footer from "./components/Footer";

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

const AppLayout = ()=>{
    return (
        <>
            <Header/>
            <Body />
            <Footer />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);