import React from 'react';
import { formatMobileNumber } from '../utils/mobileValidator';

const TrackingResults = ({ mobileNumber, timestamp }) => {
  if (!mobileNumber) return null;

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg p-6 border border-purple-200">
      <h3 className="text-xl font-bold text-gray-800 mb-4">📊 ट्र्याकिंग विवरण (Tracking Details)</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center bg-white rounded-lg p-3">
          <span className="text-sm text-gray-600">Mobile Number</span>
          <span className="font-semibold text-gray-800">+977 {formatMobileNumber(mobileNumber)}</span>
        </div>
        
        <div className="flex justify-between items-center bg-white rounded-lg p-3">
          <span className="text-sm text-gray-600">Tracked At</span>
          <span className="font-semibold text-gray-800">{timestamp}</span>
        </div>
        
        <div className="flex justify-between items-center bg-white rounded-lg p-3">
          <span className="text-sm text-gray-600">Status</span>
          <span className="font-semibold text-green-600 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Online
          </span>
        </div>
        
        <div className="flex justify-between items-center bg-white rounded-lg p-3">
          <span className="text-sm text-gray-600">Signal Strength</span>
          <span className="font-semibold text-gray-800">📶 Strong</span>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-white rounded-lg border-l-4 border-blue-500">
        <p className="text-xs text-gray-600">
          <strong>Privacy Notice:</strong> This is simulated data for demonstration purposes only. 
          Real mobile tracking requires proper authorization and legal compliance.
        </p>
      </div>
    </div>
  );
};

export default TrackingResults;
