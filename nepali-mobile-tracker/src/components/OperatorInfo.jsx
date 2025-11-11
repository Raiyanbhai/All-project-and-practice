import React from 'react';

const OperatorInfo = ({ operatorData }) => {
  if (!operatorData) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4" style={{ borderLeftColor: operatorData.color }}>
      <div className="flex items-center space-x-4">
        <div className="text-5xl">{operatorData.logo}</div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800">{operatorData.name}</h3>
          <p className="text-sm text-gray-600 mt-1">Operator: {operatorData.operator}</p>
        </div>
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: operatorData.color + '20' }}>
          <div className="w-12 h-12 rounded-full" style={{ backgroundColor: operatorData.color }}></div>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-600">Network Type</p>
          <p className="text-sm font-semibold text-gray-800">4G/LTE</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-600">Status</p>
          <p className="text-sm font-semibold text-green-600">✓ Active</p>
        </div>
      </div>
    </div>
  );
};

export default OperatorInfo;
