import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
