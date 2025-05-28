
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/atoms/Loader";
import TableCottage from "../components/pages/admin/Tables/TableCottage";
import Dashboard from "../components/pages/admin/Dashboard";
import MyProfile from "../components/pages/admin/MyProfile";
import TableUsers from "../components/pages/admin/Tables/TableUsers";
import TablePackages from "../components/pages/admin/Tables/TablePackages";
import TableReservations from "../components/pages/admin/Tables/TableReservations";
import TableSuportHelps from "../components/pages/admin/Tables/TableSuportHelps";

// Lazy load de componentes
const App = lazy(() => import("../components/templates/App"));
const Home = lazy(() => import("../components/pages/Home"));
const AboutUs = lazy(() => import("../components/pages/AboutUs"));
const ContactUs = lazy(() => import("../components/pages/ContacTUs"));
const Login = lazy(() => import("../components/pages/Login"));
const Register = lazy(() => import("../components/pages/Register"));
const RememberPassword = lazy(() => import("../components/pages/RememberPassword"));
const SearcCottage = lazy(() => import("../components/pages/SearcCottage"));
const Admin = lazy(() => import("../components/templates/Admin"));
const GuestRoute = lazy(() => import("./GuestRoute"));

// Fallback simple
const loader = <Loader />;

const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={loader}><App /></Suspense>,
        children: [
            {
                index: true,
                element: <Suspense fallback={loader}><Home /></Suspense>
            },
            {
                path: "/nosotos",
                element: <Suspense fallback={loader}><AboutUs /></Suspense>
            },
            {
                path: "/contactanos",
                element: <Suspense fallback={loader}><ContactUs /></Suspense>
            },
            {
                path: "/SearchCottage",
                element: <Suspense fallback={loader}><SearcCottage /></Suspense>
            },
        ]
    },
    {
        path: "/login",
        element: (
            <Suspense fallback={loader}>
                <GuestRoute>
                    <Login />
                </GuestRoute>
            </Suspense>
        )
    },
    {
        path: "/register",
        element: (
            <Suspense fallback={loader}>
                <GuestRoute>
                    <Register />
                </GuestRoute>
            </Suspense>
        )
    },
    {
        path: "/rememberpassqord",
        element: (
            <Suspense fallback={loader}>
                <GuestRoute>
                    <RememberPassword />
                </GuestRoute>
            </Suspense>
        )
    },
    {
        path: "/admin",
        element: <Suspense fallback={loader}><Admin /></Suspense>,
        children: [
            {
                index: true,
                element: <Suspense fallback={loader}><Dashboard /></Suspense>
            },
            {
                path: "cottage",
                element: <Suspense fallback={loader}><TableCottage /></Suspense>
            },
            {
                path: "profile",
                element: <Suspense fallback={loader}><MyProfile /></Suspense>
            },
            {
                path: "users",
                element: <Suspense fallback={loader}><TableUsers /></Suspense>
            },
            {
                path: "packages",
                element: <Suspense fallback={loader}><TablePackages /></Suspense>
            },
            {
                path: "reservations",
                element: <Suspense fallback={loader}><TableReservations /></Suspense>
            },
            {
                path: "suport-helps",
                element: <Suspense fallback={loader}><TableSuportHelps /></Suspense>
            },
        ]
    }
]);

export default router;