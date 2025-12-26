import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface JsonDisplayProps {
  data: any;
}

export function JsonDisplay({ data }: JsonDisplayProps) {
  const [copied, setCopied] = useState(false);
  const jsonString = JSON.stringify(data, null, 2);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative">
      {/* Copy Button */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span className="text-sm">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span className="text-sm">Copy JSON</span>
            </>
          )}
        </button>
      </div>

      {/* JSON Display */}
      <div className="bg-gray-900 rounded-lg p-6 overflow-auto max-h-[800px]">
        <pre className="text-sm text-gray-100">
          <code>{jsonString}</code>
        </pre>
      </div>

      {/* Schema Information */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="text-lg mb-3 text-blue-900">JSON Schema Information</h4>
        <div className="space-y-2 text-sm text-blue-800">
          <p><strong>Format:</strong> JSON (JavaScript Object Notation)</p>
          <p><strong>Structure:</strong> Nested objects with clearly defined fields</p>
          <p><strong>Benefits for AI Parsing:</strong></p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Standardized field names for consistent extraction</li>
            <li>Hierarchical structure for relationships between data</li>
            <li>Machine-readable format requiring no OCR</li>
            <li>Date formats in ISO 8601 standard (YYYY-MM-DD)</li>
            <li>Arrays for multiple items (skills, experiences, etc.)</li>
            <li>Clear separation of different resume sections</li>
          </ul>
        </div>
      </div>

      {/* Key Sections */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h5 className="text-sm mb-2 text-gray-900">Main Sections</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• personalInfo</li>
            <li>• Summary</li>
            <li>• skills</li>
            <li>• experience</li>
            <li>• projects</li>
            <li>• education</li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h5 className="text-sm mb-2 text-gray-900">Data Standards</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Dates: YYYY-MM-DD format</li>
            <li>• Arrays for multi-item fields</li>
            <li>• Nested objects for grouped data</li>
            <li>• Consistent naming conventions</li>
            <li>• UTF-8 encoding</li>
            <li>• No special formatting required</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
