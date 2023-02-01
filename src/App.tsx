import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "views/Home/home";
import RegisterEvents from "views/RegisterEvents/registerEvents";
import "./App.css";
import Forgot from "./views/ForgotPassword/forgot";
import Login from "./views/Login/login";
import SignUp from "./views/SignUp/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<Forgot />} />
        <Route path="/resgister-eventos" element={<RegisterEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
