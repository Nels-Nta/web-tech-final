import React, { useState } from 'react';
import '../Styles/Table.css';
import { Link, Outlet } from 'react-router-dom';

const IntelligenceOfficer = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cases, setCases] = useState([
        {
            caseId: 'C2007123',
            tinNumber: '101111',
            reportedDate: '27/09/2023',
            status: 'Active',
        },
        {
            caseId: 'C2007124',
            tinNumber: '101112',
            period: '1',
            taxType: 'Land Tax',
            status: 'Completed',
        },
    ]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };



    return (
        <div className="dashboard">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
                <div className="new-case-btn">
                    <Link to="newCase">
                        <button>New</button>
                    </Link>
                </div>
            </div>

            <div className="table-container">
                <table className="cases-table">
                    <thead>
                    <tr>
                        <th>Case ID</th>
                        <th>Tin Number</th>
                        <th>Period/Reported Date</th>
                        <th>Tax Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cases.map((caseItem, index) => (
                        <tr key={index}>
                            <td>{caseItem.caseId}</td>
                            <td>{caseItem.tinNumber}</td>
                            <td>{caseItem.period || caseItem.reportedDate}</td>
                            <td>{caseItem.taxType || '-'}</td>
                            <td>
                                    <span className={`status-badge ${caseItem.status.toLowerCase()}`}>
                                        {caseItem.status}
                                    </span>
                            </td>
                            <td className="action-buttons">
                                <Link to="view">
                                    <button className="action-btn view-btn">
                                        <i className="fa fa-eye"></i>
                                    </button>
                                </Link>
                                <button className="action-btn edit-btn">
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button className="action-btn delete-btn">
                                    <i className="fa fa-trash"></i>
                                </button>
                                <button>
                                    <i className="fa fa-file-text" ></i>
                                </button>
                                <button>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default IntelligenceOfficer;
