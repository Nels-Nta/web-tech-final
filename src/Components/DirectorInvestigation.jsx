import React, {useState} from 'react'
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Link} from "react-router-dom";
import {ArrowForward, Check, Close, Description} from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";

const DirectorInvestigation = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return(
        <div className="page-container">
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
                            <TableCell>Delegate</TableCell>
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
                                <Link to="/investigation-officer">
                                    <IconButton color="success">
                                        <Check />
                                    </IconButton>
                                </Link>
                                <IconButton color="error">
                                    <Close />
                                </IconButton>

                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
export default DirectorInvestigation