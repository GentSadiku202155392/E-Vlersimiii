import React,{Component, useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './DitariUpdate';
import { Link } from 'react-router-dom';
import DitariIcon from '../crud-img/ditari-icon.svg'



export default function Ditari() {

    const[ditari, setDitari] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get( 'https://localhost:7249/api/Ditari/GetDitaret' )
            .then(response => {
                setDitari(response.data);
            })
    }, [refreshKey])




 //Delete data in database    
 function DeleteDitari(idKlasa) {
    const confirmBox = window.confirm(  "A jeni i sigurte qe deshironi  me fshi Ditarin e klases " + idKlasa )
    if (confirmBox === true) {
        axios.delete('https://localhost:7249/api/Ditari/FshijeDitarin/?idKlasa=' + idKlasa)
            .then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            })
    }
    else {
        console.log("Process of deleting 'Ditari' canceled !!");
    }
}
return(
    <div>
        
                         
                           <div className='link'>
                <Link  to="../DitariAdd">
                <img src ={DitariIcon} alt="crud-img" className='icons' />
                    <p> Shto Ditar</p>
                </Link>
                </div>
   
        <br />
        <br />
   
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Klasa</th>
                            <th>Lenda</th>
                            <th>Mesimdhenesi</th>
                            <th>nxenesi</th>
                            <th>notaP1</th>
                            <th>notaP2</th>
                            <th>notaP3</th>
                            <th>notaP</th>
                            <th>Prezenca</th>
                            <th>Orari</th>
                            <th>Opsionet</th>
                           
                           


                        </tr>
                    </thead>
                    <tbody>
                        {ditari.map(Ditari=>(
                           <tr key={Ditari.idKlasa}>
                               {console.log(Ditari)}
                               <td>{Ditari.idKlasa}</td>
                               <td>{Ditari.lenda}</td>
                               <td>{Ditari.mesimdhenesiId}</td>
                               <td>{Ditari.nxenesiId}</td>
                               <td>{Ditari.notaP1}</td>
                               <td>{Ditari.notaP2}</td>
                               <td>{Ditari.notaP3}</td>
                               <td>{Ditari.notaP}</td>
                               <td>{Ditari.prezenca}</td>
                               <td>{Ditari.orari}</td>
                       
                        
                               <td>
                               <Link to="/DitariUpdate">
                                  <button type="button"  onClick={handleEdit}  
                                   className="btn1">
                                       Update
                                   </button >  </Link>

                                   <br></br>
                               <br></br>
                                   < button type="button" onClick={() => DeleteDitari(Ditari.idKlasa)}
                                   className="btn2">
                                        Delete 
    
                                   </button>
                               </td>
                           </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
    
}