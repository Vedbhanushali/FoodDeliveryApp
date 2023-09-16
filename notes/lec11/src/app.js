import React, { lazy,Suspense } from "react";
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
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";

// Lazy loading instamart
const Instamart = lazy(() => import("./components/Instamart"));
// so when we click on instamart mark then only its JS will be loaded
//in application. so first time it will throw an error. to resolve this first time issue 
// suspence comes here , wrap the component in shimmer before rendering in router path and 
// also it takes a parameter fallback (shimmer) which is render till the api / data is loaded from api.

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
            },
            {
                path: "/instamart",
                element: (
                <Suspense fallback={<Shimmer />}>
                    <Instamart />
                </Suspense>
                )

            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)