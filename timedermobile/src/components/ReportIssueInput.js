// ReportIssueInput.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed

export default function ReportIssueInput() {
  return (
    <div className="report-issue-input-div">
      <textarea className="report-issue-input" type="text" id='issue' name='issue'/>
    </div>
  );
}
