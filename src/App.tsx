import { ProtectedRoute } from "provider/UserProvider";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "views/Home/home";
import RegisterEvents from "views/RegisterEvents/registerEvents";
import Signup from "views/SignUp/view/ModalView/signup";
import ParticipantRegistration from "views/SignUp/view/ParticipantView";
import VisitantRegistration from "views/SignUp/view/VisitantView";
import "./App.css";
import Detail from "views/DetailsProject/detail";
import Forgot from "./views/ForgotPassword/forgot";
import Login from "./views/Login/login";
import { LayoutGlobal } from "./global/layoutGlobal";
import ProfileModule from "./views/Perfil/view";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <LayoutGlobal>
              <Outlet />
            </LayoutGlobal>
          </ProtectedRoute>
        }
      >
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="detalhes/:id"
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        />
        <Route
          path="register-projects"
          element={
            <ProtectedRoute>
              <RegisterEvents />
            </ProtectedRoute>
          }
        />
        <Route
          path="perfil/*"
          element={
            <ProtectedRoute>
              <ProfileModule />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/participant" element={<ParticipantRegistration />} />
      <Route path="/visitor" element={<VisitantRegistration />} />
      <Route path="/forgot-password" element={<Forgot />} />
    </Routes>
  </BrowserRouter>
);

export default App;
