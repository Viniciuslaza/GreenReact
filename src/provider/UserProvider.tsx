import { Navigate } from "react-router-dom";

type PrivateRoute = {
  user: any;
  children: JSX.Element;
};

export const ProtectedRoute = ({ user, children }: PrivateRoute) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
