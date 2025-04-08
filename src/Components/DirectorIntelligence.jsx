import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { Description, Check, Close, ArrowForward } from "@mui/icons-material";
import { Link } from 'react-router-dom';

const DirectorIntelligence = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (


    <TableContainer component={Paper}>
        <div className="search-container">
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
        <Table>
            <TableHead>
                <TableRow style={{ backgroundColor: "#cfd8dc" }}>
                    <TableCell>Case Id</TableCell>
                    <TableCell>Submitted By</TableCell>
                    <TableCell>Reported Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>CS001/25</TableCell>
                    <TableCell>100124</TableCell>
                    <TableCell>21/09/2025</TableCell>
                    <TableCell style={{ color: "green", fontWeight: "bold" }}>Approved</TableCell>
                    <TableCell>
                        <Link to="/intelligence-officer/view">
                            <IconButton color="primary">
                                <Description />
                            </IconButton>
                        </Link>
                        <Link to="/Director-Investigation">
                            <IconButton color="success">
                                <Check />
                            </IconButton>
                        </Link>
                        <IconButton color="error">
                            <Close />
                        </IconButton>
                        <Link to="/some-path">
                            <IconButton color="default">
                                <ArrowForward />
                            </IconButton>
                        </Link>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
);
};

export default DirectorIntelligence;
