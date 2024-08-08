import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Link, Outlet } from "react-router-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
const Instamart = lazy(() => import("./components/Instamart"));


import UserContext from "../utils/userContext";
//redux
import { Provider } from "react-redux";
import store from "../utils/store";

const AppLayout = () => {
    const [user, setUser] = useState({
        name: "ved Bhanushali",
        email: "ved@space.com"
    })
    return (
        <Provider store={store}>
            <UserContext.Provider value={{
                user: user,
                setUser: setUser
            }}>
                < Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </Provider>
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
                children: [
                    {
                        path: "profile",
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
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)