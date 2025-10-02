# PDF Export Functionality Documentation

## Overview
This document explains how the PDF export functionality has been implemented across all dashboards in the DelhiAir.AI application.

## Implementation Details

### Libraries Used
1. **jsPDF** - For generating PDF documents
2. **jsPDF-AutoTable** - For creating tables in PDFs

### Installation
The required libraries were installed using npm:
```bash
npm install jspdf jspdf-autotable --legacy-peer-deps
```

### Utility Functions
A utility file `src/lib/pdfUtils.js` was created with two main functions:

1. `generateSimplePDF` - Creates a PDF with basic information and data in table format
2. `generateDashboardPDF` - (Advanced feature) Creates a PDF by capturing actual dashboard content

### Integration with Dashboards
Each dashboard component was updated to include an export PDF button:

1. **Citizen Dashboard** (`src/components/dashboards/CitizenDashboard.jsx`)
2. **NGO Dashboard** (`src/components/dashboards/NGODashboard.jsx`)
3. **Research Dashboard** (`src/components/dashboards/ResearchDashboard.jsx`)
4. **Policy Dashboard** (`src/pages/PolicyDashboard.jsx`)

Each dashboard has a unique `handleExportPDF` function that:
- Dynamically imports the PDF utility functions
- Prepares dashboard-specific data
- Calls `generateSimplePDF` with appropriate parameters

### Usage
Users can click the "Export" button on any dashboard to generate and download a PDF report containing:
- Dashboard title
- User information (name and role)
- Current date
- Relevant dashboard data in a formatted table

### PDF Features
- Professional formatting with headers and footers
- Color-coded tables for better readability
- Automatic filename generation with date stamp
- Responsive design that works on all device sizes

## Testing
A test component was created at `src/components/TestPDFExport.jsx` to verify functionality across all dashboard types.

## Future Enhancements
Possible improvements include:
1. Capturing actual dashboard visuals using html2canvas
2. Adding charts and graphs to PDFs
3. Customizing PDF layouts for each dashboard type
4. Adding export options (PDF, Excel, CSV)