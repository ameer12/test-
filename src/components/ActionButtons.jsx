import React from 'react';
import { FaTelegramPlane, FaThumbtack } from 'react-icons/fa';

export default function ActionButtons() {
  return (
    <div className="grid grid-cols-4 gap-2 mb-6">
      <button className="bg-blue-600 text-white py-2 rounded-md text-sm font-semibold">$ Buy</button>
      <button className="bg-blue-600 text-white py-2 rounded-md text-sm font-semibold">↓↑ Swap</button>
      <button className="bg-blue-600 text-white py-2 rounded-md text-sm font-semibold flex flex-col items-center">
        <FaTelegramPlane className="text-lg" />
        <span className="text-xs">Send</span>
      </button>
      <button className="bg-blue-600 text-white py-2 rounded-md text-sm font-semibold flex flex-col items-center">
        <FaThumbtack className="text-lg" />
        <span className="text-xs">Receive</span>
      </button>
    </div>
  );
}
