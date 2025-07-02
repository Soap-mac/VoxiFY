import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import './Pdf.css';

const Pdf = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [startPage, setStartPage] = useState('');
  const [endPage, setEndPage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPdfFile(file);
  };

  const handleDownload = async () => {
    if (!pdfFile || !startPage || !endPage) {
      alert('Please select PDF and enter page numbers!');
      return;
    }

    setLoading(true);

    const reader = new FileReader();
    reader.readAsArrayBuffer(pdfFile);

    reader.onload = async () => {
      const pdfBytes = reader.result;
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const totalPages = pdfDoc.getPageCount();

      const start = Math.max(1, parseInt(startPage));
      const end = Math.min(parseInt(endPage), totalPages);

      if (start > end) {
        alert('Start page cannot be greater than end page.');
        setLoading(false);
        return;
      }

      const newPdf = await PDFDocument.create();
      const pages = await newPdf.copyPages(pdfDoc, Array.from({ length: end - start + 1 }, (_, i) => i + start - 1));
      pages.forEach((page) => newPdf.addPage(page));

      const newPdfBytes = await newPdf.save();
      const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'split.pdf';
      link.click();

      setLoading(false);
    };
  };

  return (
    <div className="pdf-splitter">
      <h1>Upload Your Pdf</h1>
      <div className="card">
        <label className="upload-label">
           Upload PDF
          <input type="file" accept="application/pdf" onChange={handleFileChange} hidden />
        </label>

        {pdfFile && <p className="file-name">Selected: {pdfFile.name}</p>}

        <div className="inputs">
          <input
            type="number"
            placeholder="Start Page"
            value={startPage}
            onChange={(e) => setStartPage(e.target.value)}
          />
          <input
            type="number"
            placeholder="End Page"
            value={endPage}
            onChange={(e) => setEndPage(e.target.value)}
          />
        </div>
        
        <div className='btn-group'>
        <button className="download-btn" onClick={handleDownload} disabled={loading}>
          {loading ? 'Processing...' : ' Download Answer'}
        </button>

        <button className="submit-btn"  disabled={loading}>
          {loading ? 'Processing...' : ' Go To Quiz Page '}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Pdf;
