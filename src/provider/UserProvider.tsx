import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

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

export const stringToColor = (str: string) => {
  let hash = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str?.length; i++) {
    // eslint-disable-next-line no-bitwise
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    // eslint-disable-next-line no-bitwise
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};

export const getNameLetters = (str: any) => {
  const firstLetters = str?.split(" ").map((word: string) => word.charAt(0));
  return (
    firstLetters[0] + (firstLetters.length > 1 ? firstLetters.slice(-1) : "")
  );
};

export const getInfoUser = () => {
  const localInfo = localStorage.getItem("myCurrentUser");
  const userInfo = jwt_decode<any>(localInfo);
  return userInfo;
};
