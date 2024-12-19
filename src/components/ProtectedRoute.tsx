import { Outlet, Navigate } from "react-router-dom";

export function ProtectedRoutes ({ isAuthenticated }: { isAuthenticated: boolean }) {
  
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}