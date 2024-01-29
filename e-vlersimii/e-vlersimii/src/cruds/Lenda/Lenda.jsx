import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Lenda() {
    const [lenda, setLenda] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');

    useEffect(() => {
        axios.get('https://localhost:7138/api/Lendum/GetLenda')
            .then(response => {
                setLenda(response.data);
            })
            .catch(error => {
                console.error('Error fetching lenda:', error);
            });
    }, [refreshKey]);

    function handleDeleteLenda(lendaId) {
        const confirmBox = window.confirm("A jeni i sigurtë që dëshironi të largoni Lenden?");
        if (confirmBox === true) {
            axios.delete(`https://localhost:7138/api/Lendum/FshijeLenden/${lendaId}`)
                .then(() => {
                    setRefreshKey(prevKey => prevKey + 1);
                })
                .catch(error => {
                    console.error('Error deleting lenda:', error);
                });
        }
    }

    return (
        <div>
            <br /><br />
            <Link to="/LendaAdd">
                <Button variant="outlined" color="primary">
                    Shto Lenda
                </Button>
            </Link>

            <br /><br />

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Lenda</th>
                        <th>Veprimet</th>
                    </tr>
                </thead>
                <tbody>
                    {lenda.map(lendaItem => (
                        <tr key={lendaItem.lenda}>
                            <td>{lendaItem.lenda}</td>
                            <td>
                                <Link to="/LendaUpdate">
                                    <Button variant="contained" color="primary">
                                        Modifiko
                                    </Button>
                                </Link>
                                <Button variant="contained" color="secondary" onClick={() => handleDeleteLenda(lendaItem.lenda)}>
                                    Fshij
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
