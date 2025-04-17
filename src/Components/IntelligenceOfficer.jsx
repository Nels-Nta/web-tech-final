import React from 'react';
import '../Styles/Table.css';
import { Link, Outlet } from 'react-router-dom';
import {
    Button,
    IconButton,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import {Add, Description, Search} from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const IntelligenceOfficer = () => {
    return (
        <div style={{ padding: "20px" }}>
            {/* Search Bar & New Button */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <TextField size="small" placeholder="Search" variant="outlined" />
                    <IconButton>
                        <Search />
                    </IconButton>
                </div>
                <Link to={"/intelligence-officer/newCase"}>
                    <Button variant="contained" color="primary" startIcon={<Add />}>
                        New
                    </Button>
                </Link>
            </div>

            {/* Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "#cfd8dc" }}>
                            <TableCell>Case Id</TableCell>
                            <TableCell>Tin Number</TableCell>
                            <TableCell>Period</TableCell>
                            <TableCell>Tax Type</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>CS001/25</TableCell>
                            <TableCell>100111</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>Land Tax</TableCell>
                            <TableCell style={{ fontSize: "12px", color: "#555" }}>
                                submitted to director for review
                            </TableCell>
                            <TableCell>
                                <Link to={"/Director-Intelligence"}>
                                    <IconButton >
                                        <SendIcon />
                                    </IconButton>
                                </Link>
                                <Link to={"/intelligence-officer/view"}>
                                    <IconButton color={"primary"}>
                                        <Description />
                                    </IconButton>
                                </Link>
                                <IconButton color="success">
                                    <Add />
                                </IconButton>
                                <Link to="/intelligence-officer/attachment">
                                    <IconButton >
                                        <AttachFileIcon />
                                    </IconButton>
                                </Link>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default IntelligenceOfficer;
