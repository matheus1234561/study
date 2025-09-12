import { Navigate } from "react-router-dom";
import { UseAuth } from "../../hooks/UseAuth";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = UseAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
