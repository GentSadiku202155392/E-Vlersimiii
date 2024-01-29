import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Nota1Add() {
    const [refreshKey, setRefreshKey] = useState('0');
    const navigate = useNavigate();

    // Set data to database
    const [test1, setTest1] = useState('');
    const [test2, setTest2] = useState('');
    const [aktiviteti, setAktiviteti] = useState('');
    const [notaP1, setNotaP1] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        const nota1 = { test1, test2, aktiviteti, notaP1 };

        axios.post('https://localhost:7138/api/Nota1/ShtoNota1', nota1)
            .then(() => {
                window.alert('Nota1 u shtua me sukses!');
                navigate('../Nota1');
            })
            .then(() => {
                setRefreshKey((refreshKey) => refreshKey + 1);
            });
    };

    return (
        <form onSubmit={handleAdd}>
            <br />
            <br />
            <h4 className="text-h4">Shto Nota1</h4>
            <br />
            <br />
            <TextField
                id="margin-dense"
                label="notaP1"
                value={notaP1}
                onChange={(e) => setNotaP1(e.target.value)}
                sx={{
                    marginLeft: '20px',
                    marginRight: '20px',
                    marginBottom: '20px',
                }}
            />
            <TextField
                id="margin-dense"
                label="test1"
                value={test1}
                onChange={(e) => setTest1(e.target.value)}
                sx={{
                    marginLeft: '20px',
                    marginRight: '20px',
                }}
            />
            <TextField
                id="margin-dense"
                label="test2"
                value={test2}
                onChange={(e) => setTest2(e.target.value)}
                sx={{
                    marginLeft: '20px',
                    marginRight: '20px',
                }}
            />
            <TextField
                id="margin-dense"
                label="aktiviteti"
                value={aktiviteti}
                onChange={(e) => setAktiviteti(e.target.value)}
                sx={{
                    marginLeft: '20px',
                    marginRight: '20px',
                }}
            />

            <br />
            <br />

            <button type="submit" className="button">
                Add Nota1
            </button>
        </form>
    );
}
