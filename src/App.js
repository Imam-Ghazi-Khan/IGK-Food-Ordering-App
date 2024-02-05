import React, { lazy, Suspense, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"
import About from "./components/About.js"
import Error from "./components/Error.js"
import Contact from "./components/Contact.js"
import RestaurantMenu from "./components/RestaurantMenu.js"
import Cart from "./components/Cart.js"
import UserContext from "./utils/UserContext.js"

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {

    const [userName,setUserName] = useState();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName,isLoggedIn,setIsLoggedIn}}>
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
    );
};
  
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h2>Loading....</h2>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path:"/cart",
                element: <Cart/>
            },
        ],
        errorElement:<Error/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);