import React, { useState } from 'react';
import { FileSpreadsheet, AlertCircle, Check } from 'lucide-react';

export default function BulkUpload() {
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset states
    setError(undefined);
    setSuccess(false);

    // Validate file type
    if (!file.name.endsWith('.csv') && !file.name.endsWith('.xlsx')) {
      setError('Please upload a CSV or Excel file');
      return;
    }

    // TODO: Implement file processing logic
    try {
      // Simulated success
      setSuccess(true);
    } catch (err) {
      setError('Failed to process file. Please check the format and try again.');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Bulk Upload Events</h3>
        <a
          href="/template.csv"
          download
          className="text-sm font-medium text-orange-500 hover:text-orange-600"
        >
          Download Template
        </a>
      </div>

      <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6">
        <input
          type="file"
          accept=".csv,.xlsx"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="text-center">
          <FileSpreadsheet className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop your CSV or Excel file here, or click to browse
          </p>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      {success && (
        <div className="flex items-center gap-2 text-sm text-green-600">
          <Check className="h-4 w-4" />
          File uploaded successfully!
        </div>
      )}
    </div>
  );
}