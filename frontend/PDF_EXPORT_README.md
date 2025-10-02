# PDF Export Functionality - Testing Guide

## Overview
This guide explains how to test the PDF export functionality that has been added to all dashboards in the DelhiAir.AI application.

## How to Test

### 1. Access the Test Page
1. Start the development server: `npm start`
2. Navigate to http://localhost:3000/test
3. You should see the PDF Export Test page with multiple buttons

### 2. Test Each Dashboard Type
Click each button to generate a PDF for different dashboard types:
- Basic Test PDF
- Citizen Dashboard PDF
- NGO Dashboard PDF
- Research Dashboard PDF
- Policy Dashboard PDF

### 3. Verify the Generated PDFs
Each PDF should contain:
- Dashboard title at the top
- User information (name and role)
- Current date of generation
- Data in a formatted table
- Footer with system information

## Testing on Dashboards

### Citizen Dashboard
1. Navigate to the Citizen Dashboard (requires login as citizen)
2. Click the "Export" button in the header
3. Verify the PDF is downloaded with citizen-specific data

### NGO Dashboard
1. Navigate to the NGO Dashboard (requires login as NGO)
2. Click the "Export" button in the header
3. Verify the PDF is downloaded with NGO-specific data

### Research Dashboard
1. Navigate to the Research Dashboard (requires login as researcher)
2. Click the "Export" button in the header
3. Verify the PDF is downloaded with research-specific data

### Policy Dashboard
1. Navigate to the Policy Dashboard (requires login as policymaker)
2. Click the "Export" button in the header
3. Verify the PDF is downloaded with policy-specific data

## Expected Behavior
- PDFs should be generated instantly upon clicking the export button
- PDFs should be named in the format: `[DashboardName]_Report_[Date].pdf`
- PDFs should contain relevant data for each dashboard type
- PDFs should have professional formatting with headers and footers

## Troubleshooting
If PDFs are not generating:
1. Check the browser console for errors
2. Ensure all dependencies are installed (`npm install jspdf jspdf-autotable --legacy-peer-deps`)
3. Verify there are no network issues preventing dynamic imports
4. Check that the browser is not blocking downloads

## Technical Details
- Uses jsPDF library for PDF generation
- Uses jsPDF-AutoTable plugin for table formatting
- Dynamically imports libraries to reduce initial bundle size
- Includes fallback mechanism for older browsers