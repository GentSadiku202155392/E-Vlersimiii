import React from 'react'; 


import DitariCrud from '../cruds/Ditari/ditari-crud';
import Ditari from '../cruds/Ditari/Ditari';
import DitariAdd from '../cruds/Ditari/DitariAdd';
import DitariUpdate from '../cruds/Ditari/DitariUpdate';
import Nxenesi from '../cruds/Nxenesii/Nxenesi';
import NxenesiAdd from '../cruds/Nxenesii/NxenesiAdd';
import NxenesiCrud from '../cruds/Nxenesii/nxenesi-crud';
import NxenesiUpdate from '../cruds/Nxenesii/NxenesiUpdate';
import Mesimdhenesi from '../cruds/Mesimdhenesii/Mesimdhenesi';
import MesimdhenesiAdd from '../cruds/Mesimdhenesii/MesimdhenesiAdd';
import MesimdhenesiUpdate from '../cruds/Mesimdhenesii/MesimdhenesiUpdate';
import MesimdhenesiCrud from '../cruds/Mesimdhenesii/mesimdhenesi-crud';
import DitariIcon from '../cruds/crud-img/ditari-icon.svg'
import MesimdhenesiIcon from '../cruds/crud-img/mesimdhenesi-icon.svg'
import NxenesiIcon from '../cruds/crud-img/nxenesi-icon.svg'
import Homee from '../cruds/crud-img/Homee.svg'


import '../pages/dashboard-style.css'
import {BrowserRouter, Route, Switch,NavLink, Routes} from 'react-router-dom';





export default function Dashboard() {
  return (
      <div id="dashboard">
     
     
      <div className ="container">
      

      <div className='navlinks'>
      
          <NavLink  to="/">
                <img src ={Homee} alt="crud-img" className='icons' />
                <p>Exit-HomePage</p>
        </NavLink>
        <NavLink  to="./Ditari">
                <img src ={DitariIcon} alt="crud-img" className='icons' />
                <p>Ditari</p>
        </NavLink>
        <NavLink  to="./Mesimdhenesi">
                <img src ={MesimdhenesiIcon} alt="crud-img" className='icons' />
                <p>Mesimdhenesi</p>
        </NavLink>

        <NavLink  to="./Nxenesi">
                <img src ={NxenesiIcon} alt="crud-img" className='icons' />
                <p>Nxenesi</p>
        </NavLink>
        
      </div>



      </div>

      


<Routes>
     <Route path='/Ditari/*' element={<Ditari />}/>
     <Route path='/DitariCrud/*' element={<DitariCrud />}/>
     <Route path='/DitariAdd/*' element={<DitariAdd />}/>
     <Route path='/DitariUpdate/*' element={<DitariUpdate />}/>
     <Route path='/NxenesiCrud/*' element={<NxenesiCrud />}/>
     <Route path='/Nxenesi/*' element={<Nxenesi />}/>
     <Route path='/NxenesiAdd/*' element={<NxenesiAdd />}/>
     <Route path='/NxenesiUpdate/*' element={<NxenesiUpdate />}/>
     <Route path='/Mesimdhenesi/*' element={<Mesimdhenesi/>}/>
     <Route path='/MesimdhenesiAdd/*' element={<MesimdhenesiAdd/>}/>
     <Route path='/MesimdhenesiUpdate/*' element={<MesimdhenesiUpdate/>}/>
     <Route path='/MesimdhenesiCrud/*' element={<MesimdhenesiCrud />}/>
     
     Home
      </Routes>
  </div>
  )
}