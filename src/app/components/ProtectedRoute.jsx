import { Navigate } from "react-router";

export function ProtectedRoute({ children }) {

  const admin = localStorage.getItem("admin");

  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  return children;
}