import React from 'react';
import {useNavigate} from 'react-router-dom'
import '../Styles/TaxReportView.css';

const TaxReportView = () => {
    const navigate= useNavigate();
    const reportData = {
        caseNumber: 'FR00123456789',
        informerId: 'INF01234567890',
        reportedDate: '03/28/2025',
        taxPayerTin: '6789-012-345',
        intelliceOfficer: 'Agent Smith',
        issueDescription: 'Tax Filing Evasion: Suspect failed to report income from overseas assets'
    };

    const currentDate = new Date().toLocaleDateString('en-US');

    const handlePrint = () => {
        window.print();
    };

    const handleEdit = () => {
        alert("In a real app, this would take you back to the form page");
    };

    return (
        <div className="tax-report-container">
            <div className="tax-report-card">
                <div className="header">
                    <h1 className="title">Tax Report</h1>
                    <div className="action-buttons">
                        <button onClick={handlePrint} className="print-btn">Print</button>
                    </div>
                </div>

                <div className="content">
                    <table className="report-table">
                        <tbody>
                        <tr className="table-row">
                            <td className="table-cell header-cell">Case ID</td>
                            <td className="table-cell">{reportData.caseNumber}</td>
                        </tr>
                        <tr className="table-row">
                            <td className="table-cell header-cell">Informer ID</td>
                            <td className="table-cell">{reportData.informerId}</td>
                        </tr>
                        <tr className="table-row">
                            <td className="table-cell header-cell">Reported Date</td>
                            <td className="table-cell">{reportData.reportedDate}</td>
                        </tr>
                        <tr className="table-row">
                            <td className="table-cell header-cell">Tax Payer TIN</td>
                            <td className="table-cell">{reportData.taxPayerTin}</td>
                        </tr>
                        <tr className="table-row">
                            <td className="table-cell header-cell">Investigation Officer</td>
                            <td className="table-cell">{reportData.intelliceOfficer}</td>
                        </tr>
                        <tr>
                            <td className="table-cell header-cell">Issue Description</td>
                            <td className="table-cell">{reportData.issueDescription}</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="footer">
                        <p>Issued At: Flagship Data Center</p>
                        <p>Date: {currentDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaxReportView;
