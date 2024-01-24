import React from 'react';
import Home from './pages';
import Dashboard from './pages/Dashboard';
import {BrowserRouter, Route, Switch,NavLink, Routes} from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
   <div >

      <Routes>
      <Route path='/' element={<Home />} />
     <Route path='/dashboard/*'element={<Dashboard/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    );
  }

export default App
