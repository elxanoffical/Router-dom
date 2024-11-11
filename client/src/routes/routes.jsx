import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/homePage/home";
import AboutPage from "../page/aboutPage/about";
import ContactPage from "../page/contactPage/contact";
import LoginPage from "../page/loginPage/login";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/about",
        element: <AboutPage/>
    },
    {
        path: "/contact",
        element: <ContactPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
])