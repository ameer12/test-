import React from 'react';

export default function BalanceCard({ balance = 0, change = 0 }) {
  const percentage = ((change / (balance || 1)) * 100).toFixed(2);

  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-4">
      <div className="text-sm font-semibold text-gray-600 mb-1">Balance</div>
      <div className="text-3xl font-bold text-gray-800">
        {balance} <span className="text-lg">$</span>
      </div>
      <div className="text-sm text-gray-500 mt-1">
        {change.toFixed(2)}$ <span className="text-xs">({percentage}%)</span>
      </div>
    </div>
  );
}
