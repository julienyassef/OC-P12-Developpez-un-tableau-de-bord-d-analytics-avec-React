import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarHorizontal from './component/layout/NavBarHorizontal/NavBarHorizontal';
import NavBarVertical from './component/layout/NavBarVertical/NavBarVertical';
import Dashboard from './page/Dashboard/Dashboard';
import DataProvider from './provider/DataProvider';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
  </React.StrictMode>,
)
