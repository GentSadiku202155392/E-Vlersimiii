import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Nxenesii from './Nxenesi';

export default function UpdateNxenesii() {
    const [nxenesii, SetNxenesii] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7249/api/Nxenesii/GetNxenesat')
            .then(response => {
                SetNxenesii(response.data);
             
            });
    }, [refreshKey]);

    const [idNxenesi,setIdNxenesi] = useState('');
     const [klasa, setKlasa] = useState('');
     const [emriN, setEmriN] = useState('');
     const [mbiemriN, setMbiemriN] = useState('');
     const [lenda, setLenda] = useState('');

    const handleEdit = (e) => {
        e.preventDefault();
        const Nxenesi = { idNxenesi, klasa, emriN, mbiemriN, lenda};
        nxenesii.map((UpdateNxenesii) => {
            if (idNxenesi == UpdateNxenesii.idNxenesi) {
               axios.put('https://localhost:7249/api/Nxenesii/UpdateNxenesi', Nxenesi)

                    .then(() => {
                        console.log(Nxenesi);
                    })
                    .then(() => {
                        window.confirm('Nxenesi u perditesua me sukses!');
                        
                    });
            }
        });
    };
    

    return (
        <form onSubmit={handleEdit} >
                  <TextField
            required
            idKlasa="filled-required"
                label="idNxenesi"
                variant="standard"
                value={idNxenesi}
                onChange={(e) => setIdNxenesi(e.target.value)}
            />
                      <TextField
            required
            iD_Ditari="filled-required"
                label="klasa"
                variant="standard"
                value={klasa}
                onChange={(e) => setKlasa(e.target.value)}
            />
                       <TextField
            required
            lenda="filled-required"
                label="emriN"
                variant="standard"
                value={emriN}
                onChange={(e) => setEmriN(e.target.value)}
            />
                       <TextField
            required
            mesimdhenesiId="filled-required"
                label="mbiemriN"
                variant="standard"
                value={mbiemriN}
                onChange={(e) => setMbiemriN(e.target.value)}
            />
                       <TextField
            required
            nxenesiId="filled-required"
                label="lenda"
                variant="standard"
                value={lenda}
                onChange={(e) => setLenda(e.target.value)}
            />
                    
                            <br /><br /><br />
                           
                           <button type="submit" className="btn btn-outline-secondary">
                               Ruaj ndryshimet
                            </button>
        </form>
    );
}