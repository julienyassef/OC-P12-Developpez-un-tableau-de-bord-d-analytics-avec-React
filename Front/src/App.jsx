import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBarHorizontal from './component/layout/NavBarHorizontal/NavBarHorizontal';
import NavBarVertical from './component/layout/NavBarVertical/NavBarVertical';
import Dashboard from './Page/Dashboard/Dashboard';

function App() {
  return (
    <>
      <NavBarHorizontal />
      <Router>
        <Routes>
          <Route path="/user/:id" element={<Dashboard />} />
        </Routes>
      </Router>
      <NavBarVertical />
    </>
  );
}

export default App;

