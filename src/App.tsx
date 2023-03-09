import { ProtectedRoute } from "provider/UserProvider";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "views/Home/home";
import RegisterEvents from "views/RegisterEvents/registerEvents";
import "./App.css";
import Forgot from "./views/ForgotPassword/forgot";
import Login from "./views/Login/login";
import SignUp from "./views/SignUp/signup";

const App = () => {
  const [user, setUser] = useState<boolean>();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register-projects"
          element={
            <ProtectedRoute user={user}>
              <RegisterEvents />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login userLogged={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
