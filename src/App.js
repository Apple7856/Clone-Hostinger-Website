import React from 'react';
import LoginPage from './Components/Log-In-Page/LoginPage';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-page" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App