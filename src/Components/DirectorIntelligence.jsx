import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { Description, Check, Close, } from "@mui/icons-material";
import { Link } from 'react-router-dom';

const DirectorIntelligence = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cases, setCases] = useState([
        {
            id: 'CS001/25',
            delegate: '100111',
            reportedDate: '21/09/2025',
            status: 'Report received from Intelligence Officer',
        },
        {
            id: 'CS002/25',
            delegate: '100114',
            reportedDate: '22/09/2025',
            status: 'Received from Surveillance Officer',
        }
    ]);

    const handleApprove = (index) => {
        const updatedCases = [...cases];
        updatedCases[index].status = 'Sent to Assistant Commissioner';
        setCases(updatedCases);
    };

    const handleReject = (index) => {
        const updatedCases = [...cases];
        updatedCases[index].status = 'Classified';
        setCases(updatedCases);
    };

    const handleDelegateChange = (e, index) => {
        const updatedCases = [...cases];
        updatedCases[index].delegate = e.target.value;
        setCases(updatedCases);
    };

    const filteredCases = cases.filter(
        (item) =>
            item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.delegate.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="page-container" style={{ padding: "20px" }}>
            <TableContainer component={Paper}>
                <div className="search-container" style={{ padding: '10px' }}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                border: "none"
                            }}
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
                            <TableCell>Delegate</TableCell>
                            <TableCell>Reported Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredCases.map((caseItem, index) => (
                            <TableRow key={caseItem.id}>
                                <TableCell>{caseItem.id}</TableCell>
                                <TableCell>
                                    <input
                                        type="text"
                                        value={caseItem.delegate}
                                        onChange={(e) => handleDelegateChange(e, index)}
                                        style={{
                                            border: 'none',
                                            borderRadius: '4px',
                                            padding: '4px 8px',
                                            width: '100%',
                                            fontSize: '14px'
                                        }}
                                    />
                                </TableCell>
                                <TableCell>{caseItem.reportedDate}</TableCell>
                                <TableCell style={{
                                    color: caseItem.status === "Sent to Assistant Commissioner" ? "green" :
                                        caseItem.status === "Classified" ? "red" : "#555",
                                    fontWeight: "bold"
                                }}>
                                    {caseItem.status}
                                </TableCell>
                                <TableCell>
                                    <Link to="/intelligence-officer/view">
                                        <IconButton color="primary">
                                            <Description />
                                        </IconButton>
                                    </Link>
                                    <Link to={"/assistant-commissioner"}>
                                        <IconButton color="success" onClick={() => handleApprove(index)}>
                                            <Check />
                                        </IconButton>
                                    </Link>

                                    <IconButton color="error" onClick={() => handleReject(index)}>
                                        <Close />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DirectorIntelligence;
