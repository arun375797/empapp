import React, { useEffect, useState } from 'react';
import '../nav.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress from Material-UI
import axios from 'axios';

const Dashboard = () => {
    const [dataset, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setData(res.data);
            })
            .finally(() => {
                setLoading(false); // Set loading to false when data fetching is completed
            });
    }, []);

    return (
        <div className='containerf'>
            {loading ? ( // Conditionally render loading state
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress color="primary" size={80} thickness={5} /> {/* Render CircularProgress */}
                </div>
            ) : (
                <TableContainer className='tabling' component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{ border: '3px solid black' }}>
                            <TableRow>
                                <TableCell style={{ border: '5px solid black', fontSize: '25px', fontWeight: '700' }} align="center">ID</TableCell>
                                <TableCell style={{ border: '5px solid black', fontSize: '25px', fontWeight: '700' }} align="center"> NAME</TableCell>
                                <TableCell style={{ border: '5px solid black', fontSize: '25px', fontWeight: '700' }} align="center">E-MAIL</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataset.map((row) => (
                                <TableRow style={{ border: '3px solid black' }}
                                    key={row.name}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell style={{ border: '3px solid black', fontSize: '20px' }} align="center">{row.id}</TableCell>
                                    <TableCell style={{ border: '3px solid black', fontSize: '20px' }} align="center">{row.name}</TableCell>
                                    <TableCell style={{ border: '3px solid black', fontSize: '20px' }} align="center">{row.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};

export default Dashboard;
