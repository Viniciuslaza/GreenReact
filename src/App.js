import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login/login.tsx';
import SignUp from './SignUp/signup.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
