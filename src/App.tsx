import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
