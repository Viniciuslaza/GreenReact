import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../perfil";

export const ProfileRouter: React.FC = () => (
  <Routes>
    <Route path=":id?" element={<Profile />} />
  </Routes>
);
