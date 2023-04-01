import { Navigate } from "react-router-dom";

type PrivateRoute = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: PrivateRoute) => {
  const localInfo = localStorage.getItem("myCurrentUser");

  if (!localInfo) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
