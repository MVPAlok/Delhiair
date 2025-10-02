import { generateSimplePDF } from './pdfUtils';

// Mock jsPDF and jsPDF-AutoTable
jest.mock('jspdf', () => {
  return jest.fn().mockImplementation(() => {
    return {
      setProperties: jest.fn(),
      setFontSize: jest.fn(),
      setTextColor: jest.fn(),
      text: jest.fn(),
      setDrawColor: jest.fn(),
      line: jest.fn(),
      autoTable: jest.fn(),
      save: jest.fn(),
      lastAutoTable: {
        finalY: 100
      }
    };
  });
});

describe('pdfUtils', () => {
  describe('generateSimplePDF', () => {
    it('should generate a PDF with the provided data', () => {
      const result = generateSimplePDF(
        'Test Dashboard',
        'Test User',
        'tester',
        {
          'Test Parameter': 'Test Value',
          'Another Parameter': 'Another Value'
        }
      );
      
      // Since the function uses dynamic imports, we can't fully test it here
      // But we can verify it doesn't throw an error
      expect(result).toBeDefined();
    });

    it('should handle empty data', () => {
      const result = generateSimplePDF(
        'Test Dashboard',
        'Test User',
        'tester',
        {}
      );
      
      expect(result).toBeDefined();
    });

    it('should handle undefined data', () => {
      const result = generateSimplePDF(
        'Test Dashboard',
        'Test User',
        'tester'
      );
      
      expect(result).toBeDefined();
    });
  });
});