import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LendaUpdate() {
    const [lenda, setLenda] = useState('');
    const [refreshKey, setRefreshKey] = useState('0');
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://localhost:7138/api/Lendum/UpdateLenda')
            .then(response => {
                setLenda(response.data);
            })
            .catch(error => {
                console.error('Error fetching lenda for update:', error);
                setError('Gabim gjate marjes se lendeve!'); // Update error state
            });
    }, [refreshKey]);

    const handleEdit = (e) => {
        e.preventDefault();
        axios.put('https://localhost:7138/api/Lendum/UpdateLenda', { lenda })
            .then(() => {
                console.log('Lenda updated successfully:', lenda);
                window.confirm('Lenda u perditesua me sukses!');
                setRefreshKey(prevKey => prevKey + 1); // Refresh data after update
            })
            .catch(error => {
                console.error('Error updating lenda:', error);
                setError('Gabim gjate perditesimit te lendeve!'); // Update error state
            });
    };

    return (
        <div>
            {error && <p>{error}</p>} {/* Display error message if error state is set */}
            <form onSubmit={handleEdit}>
                <TextField
                    required
                    label="Lenda"
                    variant="outlined"
                    value={lenda}
                    onChange={(e) => setLenda(e.target.value)}
                />
                <br /><br />
                <Button type="submit" variant="outlined" color="primary">
                    Ruaj Ndryshimet
                </Button>
            </form>
        </div>
    );
}
