import './App.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarHorizontal from './component/layout/NavBarHorizontal/NavBarHorizontal';
import NavBarVertical from './component/layout/NavBarVertical/NavBarVertical';
import Dashboard from './Page/Dashboard/Dashboard';
import DataProvider from './provider/DataProvider';


function App() {
  return (
    <Router>
        <div className="app-container">
          <NavBarHorizontal />
          <NavBarVertical />
            <Routes>
              <Route path="/user/:id" element={
                <DataProvider>
                  <Dashboard />
                </DataProvider>
              } />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
