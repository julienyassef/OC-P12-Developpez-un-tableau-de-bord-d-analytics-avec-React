import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarHorizontal from './component/layout/NavBarHorizontal/NavBarHorizontal';
import NavBarVertical from './component/layout/NavBarVertical/NavBarVertical';
import Dashboard from './Page/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBarHorizontal />
        <div className="main-container">
          <NavBarVertical />
          <div className="main-content">
            <Routes>
              <Route path="/user/:id" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
