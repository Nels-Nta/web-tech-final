import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import {useNavigate} from 'react-router-dom'
import '../Styles/TaxReportForm.css';

const TaxReportForm = () => {
    const [formData, setFormData] = useState({
        informerId: '',
        caseNumber: '',
        taxPayerTin: '',
        intelliceOfficer: '',
        reportedDate: '',
        issueDescription: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate= useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            console.log("Form submitted:", formData);
            alert("Form submitted successfully! In a real app, you would be redirected to the report page.");
        }, 1000);
        navigate('/intelligence-officer')
    };

    return (
        <div className="tax-report-form-container">
            <div className="tax-report-form-card">
                <div className="tax-report-form-header">
                    <h1>Tax Report Form</h1>
                </div>

                <form onSubmit={handleSubmit} className="tax-report-form">
                    <div className="tax-report-form-grid">
                        <div>
                            <label className="tax-report-form-label">Informer ID</label>
                            <input
                                type="text"
                                name="informerId"
                                value={formData.informerId}
                                onChange={handleChange}
                                className="tax-report-form-input"
                                required
                            />
                        </div>

                        <div>
                            <label className="tax-report-form-label">Case Number</label>
                            <input
                                type="text"
                                name="caseNumber"
                                value={formData.caseNumber}
                                onChange={handleChange}
                                className="tax-report-form-input"
                                required
                            />
                        </div>

                        <div>
                            <label className="tax-report-form-label">Tax Payer TIN</label>
                            <input
                                type="text"
                                name="taxPayerTin"
                                value={formData.taxPayerTin}
                                onChange={handleChange}
                                className="tax-report-form-input"
                                required
                            />
                        </div>

                        <div>
                            <label className="tax-report-form-label">Intellice Officer</label>
                            <input
                                type="text"
                                name="intelliceOfficer"
                                value={formData.intelliceOfficer}
                                onChange={handleChange}
                                className="tax-report-form-input"
                                required
                            />
                        </div>

                        <div>
                            <label className="tax-report-form-label">Reported Date</label>
                            <div className="tax-report-form-date-container">
                                <input
                                    type="date"
                                    name="reportedDate"
                                    value={formData.reportedDate}
                                    onChange={handleChange}
                                    className="tax-report-form-input"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="tax-report-form-label">Issue Description</label>
                            <textarea
                                name="issueDescription"
                                value={formData.issueDescription}
                                onChange={handleChange}
                                rows="3"
                                className="tax-report-form-textarea"
                                required
                            />
                        </div>
                    </div>

                    <div className="tax-report-form-buttons">
                        <button
                            type="button"
                            className="tax-report-form-button tax-report-form-button-cancel"
                            onClick={()=>navigate('/intelligence-officer')}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="tax-report-form-button tax-report-form-button-save"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="tax-report-form-button-spinner"></span>
                                    Processing...
                                </>
                            ) : (
                                'Save'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaxReportForm;
