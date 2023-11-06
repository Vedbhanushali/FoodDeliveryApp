import React, { Children } from "react";
import ReactDOM from "react-dom/client";
//importing link for browser routing
import {Link, Outlet} from "react-router-dom"

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import {createBrowserRouter ,  RouterProvider} from "react-router-dom";
import About  from "./components/About";
import Contact from "./components/Contact"; 
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

const AppLayout = ()=>{
    return (
        <>
            <Header/>
            <Outlet />
            <Footer />
        </>
    );
};

//define createBrowserRouter after main component
//createBrowserRouter contains configuration list of paths which says URL and component to loads
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,//if any wrong URL is provided from this page it will show Error component
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                // errorElement: <Error />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//we don't want to render our applayout we want to render as per path and our appRouter contains our configuration of browser routes
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />)