import React, { useState } from 'react';

const MobileInput = ({ onTrack }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    if (value.length <= 10) {
      setMobileNumber(value);
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (mobileNumber.length !== 10) {
      setError('कृपया १० अंकको मोबाइल नम्बर प्रविष्ट गर्नुहोस्');
      return;
    }
    
    if (!['96', '97', '98'].includes(mobileNumber.substring(0, 2))) {
      setError('अवैध नेपाली मोबाइल नम्बर');
      return;
    }
    
    onTrack(mobileNumber);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            मोबाइल नम्बर प्रविष्ट गर्नुहोस् (Enter Mobile Number)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
              +977
            </span>
            <input
              type="tel"
              value={mobileNumber}
              onChange={handleInputChange}
              placeholder="98XXXXXXXX"
              className="w-full pl-16 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-all"
              maxLength="10"
            />
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠️</span>
              {error}
            </p>
          )}
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          🔍 ट्र्याक गर्नुहोस् (Track Location)
        </button>
      </form>
      
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-xs text-yellow-800">
          <strong>नोट:</strong> यो एक डेमो एप्लिकेशन हो। वास्तविक स्थान ट्र्याकिंगको लागि टेलिकम अपरेटर API आवश्यक छ।
        </p>
        <p className="text-xs text-yellow-800 mt-1">
          <strong>Note:</strong> This is a demonstration app. Real location tracking requires telecom operator API access.
        </p>
      </div>
    </div>
  );
};

export default MobileInput;
