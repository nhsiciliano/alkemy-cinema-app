import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";


export function ProtectedRoutes({ children }) {
    const { user, loading } = useAuth();

    if (loading) return <h1>Loading</h1>;

    if (!user) return <Navigate to="/" />;

    return children ? children : <Outlet />
    
}