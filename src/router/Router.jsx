import { createBrowserRouter } from "react-router-dom";
import App from "../components/templates/App";
import Home from "../components/pages/Home";
import AboutUs from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContacTUs";
import Login from "../components/pages/Login";
import Admin from "../components/templates/Admin";
import Register from "../components/pages/Register";
import RememberPassword from "../components/pages/RememberPassword";
import SearcCottage from "../components/pages/SearcCottage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/nosotos",
                element: <AboutUs />
            },
            {
                path: "/contactanos",
                element: <ContactUs />
            },
            {
                path: "/SearchCottage",
                element: <SearcCottage />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,

    },
    {
        path: "/register",
        element: <Register />,

    },
    {
        path: "/rememberpassqord",
        element: <RememberPassword />,

    },
    {
        path: "/admin",
        element: <Admin />,

    }
])

export default router