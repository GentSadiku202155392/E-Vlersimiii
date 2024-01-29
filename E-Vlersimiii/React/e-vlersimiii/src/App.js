import React from 'react';
import Nota1Add from './cruds/Nota1/Nota1Add.jsx';
import Nota1Update from './cruds/Nota1/Nota1Update';
import Nota1 from './cruds/Nota1/Nota1';
import Nota2Add from './cruds/Nota2/Nota2Add';
import Nota2Update from './cruds/Nota2/Nota2Update';
import Nota2 from './cruds/Nota2/Nota2';
import Nota3Add from './cruds/Nota3/Nota3Add';
import Nota3Update from './cruds/Nota3/Nota3Update';
import Nota3 from './cruds/Nota3/Nota3';
import VleresimiPerfundimtarAdd from './cruds/VleresimiPerfundimtar/VleresimiPerfundimtarAdd';
import VleresimiPerfundimtarUpdate from './cruds/VleresimiPerfundimtar/VleresimiPerfundimtarUpdate';
import VleresimiPerfundimtar from './cruds/VleresimiPerfundimtar/VleresimiPerfundimtar';

import {BrowserRouter, Route, Switch,NavLink, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h1>Admin ----   Dashboard</h1> 
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
         
          </li>
     <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="./Nota1">
      Nota1
            </NavLink>
            
            &nbsp; 
            &nbsp; 
            <NavLink className="btn btn-light btn-outline-primary" to="./Nota1Add">
      Nota1Add
            </NavLink>
            &nbsp; 
            &nbsp; 
            <NavLink className="btn btn-light btn-outline-primary" to="./Nota2">
      Nota2
            </NavLink>
            &nbsp; 
            &nbsp; 
            <NavLink className="btn btn-light btn-outline-primary" to="./Nota3">
      Nota3
            </NavLink>
            &nbsp; 
            &nbsp; 
            <NavLink className="btn btn-light btn-outline-primary" to="./VleresimiPerfundimtar">
      VleresimiPerfundimtar
            </NavLink>
           
          </li>

        </ul>
      </nav>

      <Routes>
     <Route path= '/VleresimiPerfundimtar/*' element= {<VleresimiPerfundimtar/>}/>
     <Route path='/VleresimiPerfundimtarAdd/*' element={<VleresimiPerfundimtarAdd/>}/>
     <Route path='/VleresimiPerfundimtarUpdate/*' element={<VleresimiPerfundimtarUpdate/>}/>
     <Route path= '/Nota3/*' element= {<Nota3/>}/>
     <Route path='/Nota3Add/*' element={<Nota3Add/>}/>
     <Route path='/Nota3Update/*' element={<Nota3Update/>}/>
     <Route path= '/Nota2/*' element= {<Nota2/>}/>
     <Route path='/Nota2Add/*' element={<Nota2Add/>}/>
     <Route path='/Nota2Update/*' element={<Nota2Update/>}/>
     <Route path='/Nota1/*' element={<Nota1/>}/>
     <Route path='/Nota1Add/*' element={<Nota1Add/>}/>
     <Route path='/Nota1Update/*' element={<Nota1Update/>
     }
   />
   
     
     
      </Routes>
    </div>
    </BrowserRouter>
    );
  }


export default App

