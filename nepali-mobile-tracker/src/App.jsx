import React, { useState } from 'react';
import MobileInput from './components/MobileInput';
import OperatorInfo from './components/OperatorInfo';
import LocationMap from './components/LocationMap';
import TrackingResults from './components/TrackingResults';
import { detectOperator } from './utils/mobileValidator';
import { getLocationFromNumber } from './utils/locationData';

function App() {
  const [trackingData, setTrackingData] = useState(null);

  const handleTrack = (mobileNumber) => {
    const operator = detectOperator(mobileNumber);
    const location = getLocationFromNumber(mobileNumber);
    const timestamp = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    setTrackingData({
      mobileNumber,
      operator,
      location,
      timestamp
    });
  };

  const handleReset = () => {
    setTrackingData(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-4xl">📍</span>
              <div>
                <h1 className="text-3xl font-bold">Nepal Mobile Tracker</h1>
                <p className="text-blue-100 text-sm">नेपाली मोबाइल नम्बर ट्र्याकर</p>
              </div>
            </div>
            {trackingData && (
              <button
                onClick={handleReset}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                🔄 नयाँ खोज (New Search)
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!trackingData ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🇳🇵</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  नेपाली मोबाइल नम्बर ट्र्याक गर्नुहोस्
                </h2>
                <p className="text-gray-600">
                  Track Nepali Mobile Numbers - NTC, Ncell, Smart Cell & More
                </p>
              </div>
              
              <MobileInput onTrack={handleTrack} />
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-bold text-gray-800 mb-2">Operator Detection</h3>
                <p className="text-sm text-gray-600">Identify NTC, Ncell, Smart Cell operators</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🗺️</div>
                <h3 className="font-bold text-gray-800 mb-2">Location Mapping</h3>
                <p className="text-sm text-gray-600">View approximate location on Nepal map</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-bold text-gray-800 mb-2">Privacy First</h3>
                <p className="text-sm text-gray-600">Demo app with simulated data only</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <OperatorInfo operatorData={trackingData.operator} />
                <TrackingResults 
                  mobileNumber={trackingData.mobileNumber}
                  timestamp={trackingData.timestamp}
                />
              </div>
              
              {/* Right Column */}
              <div>
                <LocationMap location={trackingData.location} />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            🇳🇵 Made for Nepal | Demo Application for Educational Purposes
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Real mobile tracking requires proper authorization and telecom operator API access
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
