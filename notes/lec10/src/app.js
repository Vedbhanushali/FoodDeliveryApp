import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import {Link, Outlet} from "react-router-dom"

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import {createBrowserRouter ,  RouterProvider} from "react-router-dom";
import About  from "./components/About";
import Contact from "./components/Contact"; 
import Profile from "./components/Profile";
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

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children:[
                    {
                        path: "profile", //here writing profile not "/profile" because this will be considered as path from root
                        //but we don't want this we want path like localhost/about/profile
                        element: <Profile />
                    }
                ]
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
root.render(<RouterProvider router={appRouter} />)