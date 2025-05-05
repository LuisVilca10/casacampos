import { createBrowserRouter } from "react-router-dom";
import App from "../components/templates/App";
import Home from "../components/pages/Home";
import AboutUs from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContacTUs";


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
            }
        ]
    }
])

export default router