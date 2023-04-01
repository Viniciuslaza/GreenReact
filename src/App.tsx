import { ProtectedRoute } from "provider/UserProvider";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "views/Home/home";
import RegisterEvents from "views/RegisterEvents/registerEvents";
import Signup from "views/SignUp/view/ModalView/signup";
import ParticipantRegistration from "views/SignUp/view/ParticipantView";
import "./App.css";
import Forgot from "./views/ForgotPassword/forgot";
import Login from "./views/Login/login";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/register-projects"
        element={
          <ProtectedRoute>
            <RegisterEvents />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/participant" element={<ParticipantRegistration />} />
      <Route path="/visitor" element={<ParticipantRegistration />} />
      <Route path="/forgot-password" element={<Forgot />} />
    </Routes>
  </BrowserRouter>
);

export default App;
