import { createBrowserRouter } from "react-router-dom";
import App from "../components/templates/App";
import Home from "../components/pages/Home";
import AboutUs from "../components/pages/AboutUs";


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
            }
        ]
    }
])

export default router