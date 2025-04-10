import { createBrowserRouter } from "react-router-dom";
import App from "../components/pages/App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    }
])

export default router