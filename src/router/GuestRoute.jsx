// src/components/routes/GuestRoute.jsx
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


const GuestRoute = ({ children }) => {
    const { userData } = useContext(UserContext);

    if (userData) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default GuestRoute;
