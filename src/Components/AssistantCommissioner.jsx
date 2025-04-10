import React from 'react';
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
import {Add, ArrowForward, Description, Search} from "@mui/icons-material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {Link} from 'react-router-dom'
import SendIcon from "@mui/icons-material/Send";

const AssistantCommissioner = () => {
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
                <Button variant="contained" color="primary" startIcon={<Add />}>
                    New
                </Button>
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
                                Submitted to Director Officer
                            </TableCell>
                            <TableCell>
                                <Link to={"/Director-Investigation"}>
                                    <IconButton >
                                        <SendIcon />
                                    </IconButton>
                                </Link>
                                <IconButton color="default">
                                    <Description />
                                </IconButton>
                                <IconButton color="success">
                                    <Add />
                                </IconButton>
                                <IconButton >
                                    <AttachFileIcon />
                                </IconButton>

                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AssistantCommissioner;
