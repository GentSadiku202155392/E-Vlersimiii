import React from 'react';
import Ditari from '../cruds/Ditari/Ditari';
import DitariAdd from './cruds/Ditari/DitariAdd';
import DitariUpdate from './cruds/Ditari/DitariUpdate';
import Nxenesi from '../cruds/Nxenesii/Nxenesi';
import NxenesiAdd from './cruds/Nxenesii/NxenesiAdd';
import NxenesiUpdate from './cruds/Nxenesii/NxenesiUpdate';
import Mesimdhenesi from './cruds/Mesimdhenesii/Mesimdhenesi';
import MesimdhenesiAdd from './cruds/Mesimdhenesii/MesimdhenesiAdd';
import MesimdhenesiUpdate from './cruds/Mesimdhenesii/MesimdhenesiUpdate';



import '../pages/dashboard-style.css'
import {BrowserRouter, Route, Switch,NavLink, Routes} from 'react-router-dom';





export default function Dashboard() {
  return (
    <div id="dashboard">
    <div>
      <br /> 
    <nav className="navbar navbar-expand-sm bg-light navbar-dark">
    <ul className="navbar-nav">
  <li className="nav-item- m-2">
        
           
            <NavLink className="btn btn-light btn-outline-primary" to="./Ditari">
      Ditari
            </NavLink>
           
       
            
          </li>

        </ul>
      </nav>
</div>

      

      
<Routes>
     <Route path='/Ditari' element={<Ditari />}/>
     <Route path='/DitariAdd' element={<DitariAdd />}/>
     <Route path='/DitariUpdate' element={<DitariUpdate />}/>
     <Route path='/Nxenesi' element={<Nxenesi />}/>
     <Route path='/NxenesiAdd' element={<NxenesiAdd />}/>
     <Route path='/NxenesiUpdate' element={<NxenesiUpdate />}/>
     <Route path='/Mesimdhenesi' element={<Mesimdhenesi/>}/>
     <Route path='/MesimdhenesiAdd' element={<MesimdhenesiAdd/>}/>
     <Route path='/MesimdhenesiUpdate' element={<MesimdhenesiUpdate/>}/>



 

      </Routes>
  </div>
  )
}