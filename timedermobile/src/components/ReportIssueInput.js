// ReportIssueInput.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed

export default function ReportIssueInput({ value, onChange }) {
    return (
        <div className="report-issue-input-div">
            <textarea className="report-issue-input" id='issue' name='issue' value={value} onChange={onChange}/>
        </div>
    );
}