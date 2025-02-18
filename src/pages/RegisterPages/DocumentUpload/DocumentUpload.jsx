import React, { useState, useCallback } from 'react';
import {  X, CheckCircle, AlertCircle } from 'lucide-react';
import Upload from "../../../assets/images/registrationImages/upload.svg"

const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState([]);

  const documents = [
    { id: 1, type: "PDF", name: "Invoice_123.pdf", status: "Completed" },
    { id: 2, type: "Word", name: "Report.docx", status: "Pending" },
    { id: 3, type: "Excel", name: "Data.xlsx", status: "Failed" },
  ];

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };


  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const validateFile = (file) => {
    // Add your file type validation here
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/msword', 
                       'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      return false;
    }
    // 10MB file size limit
    if (file.size > 10 * 1024 * 1024) {
      return false;
    }
    return true;
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setError('');

    const droppedFiles = Array.from(e.dataTransfer.files);
    
    const invalidFiles = droppedFiles.filter(file => !validateFile(file));
    if (invalidFiles.length > 0) {
      setError('Please upload only PDF, Word documents, or images under 10MB.');
      return;
    }

    setFiles(prevFiles => [...prevFiles, ...droppedFiles]);
  }, []);

  const handleFileInput = useCallback((e) => {
    const selectedFiles = Array.from(e.target.files);
    
    const invalidFiles = selectedFiles.filter(file => !validateFile(file));
    if (invalidFiles.length > 0) {
      setError('Please upload only PDF, Word documents, or images under 10MB.');
      return;
    }

    setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
    setError('');
  }, []);

  const removeFile = useCallback((index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="flex flex-col items-start justify-start mb-52 mr-40">
           <h1 className="text-white w-full font-roboto text-[48px] font-medium leading-none tracking-[1.92px] mb-10 text-start">
          Upload Your Documents
      </h1>
      <div  className='mb-20'>
        <label htmlFor="text" className="text-white font-roboto text-lg font-normal leading-10 py-3">Upload Your Citizenship Certificate</label>
        
      <div
        className={`w-[984px] h-[203px] border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        < img src={Upload} className="w-full h-12 mx-auto mb-4 text-gray-400" />
        <p className="mb-2 text-lg">
          Drag & drop  or
          <label className="mx-2 text-[#01BAEF] cursor-pointer hover:text-[#01BAEF]">
            Browse
            <input
              type="file"
              className="hidden"
              multiple
              onChange={handleFileInput}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
          </label>
        </p>
        <p className="text-sm text-white">
         Please upload documents upto 1 MB.
        </p>
      </div>
              </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          {error}
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">Uploaded Files</h3>
          <div className="space-y-3">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm">{file.name}</span>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
<div>
    <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
            <tr className="bg-black">
                <th className="border border-gray-300 w-[60px] h-[56px] px-4 py-2"></th>
                <th className="border border-gray-300 w-[124px] h-[56px] px-4 py-2">Type ↑</th>
                <th className="border border-gray-300 w-[204px] h-[56px] px-4  py-2">Name ↓</th>
                <th className="border border-gray-300 w-[558px] h-[56px] px-4 py-2">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border w-[60px] h-[56px] border-gray-300 px-4 py-2"></td>
                <td className="border w-[124px] h-[56px] border-gray-300 px-4 py-2">Data 2</td>
                <td className="border w-[204px] h-[56px] border-gray-300 px-4 py-2">Data 1</td>
                <td className="border w-[558px] h-[56px] border-gray-300 px-4 py-2">Data 2</td>
            </tr>
        </tbody>
    </table>
    </div>

      
    </div>
  );
};

export default FileUpload;