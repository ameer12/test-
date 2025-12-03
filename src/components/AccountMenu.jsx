import React, { useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';

export default function AccountMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-sm font-semibold text-gray-700 flex items-center"
      >
        Account 1 <FiChevronUp className="ml-1 rotate-180" />
      </button>

      {showMenu && (
        <div className="fixed bottom-0 left-0 w-full h-1/2 bg-white shadow-lg rounded-t-xl p-4 z-50">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-gray-800">Account 1</span>
            <button className="border border-blue-600 text-blue-600 font-bold text-lg rounded-md px-3 py-1">+</button>
          </div>
          <button className="text-sm text-blue-600 font-medium">Create Account</button>
        </div>
      )}
    </div>
  );
}
