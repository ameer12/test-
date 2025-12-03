import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { supportedNetworks, receivingAddress } from '../config/walletNetworks';

toast.configure();

export default function ReceivePanel() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address);
    toast.success('Address copied ✓', { position: 'top-center', autoClose: 2000 });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {supportedNetworks.map((net) => (
        <div key={net.symbol} className="flex justify-between items-center bg-white border rounded-md p-3">
          <div className="flex items-center space-x-2">
            <img src={net.logo} alt={net.name} className="w-6 h-6" />
            <div>
              <div className="font-semibold text-sm">{net.name}</div>
              <div className="text-xs text-gray-500">{receivingAddress}</div>
            </div>
          </div>
          <button onClick={() => handleCopy(receivingAddress)}>
            <FiCopy className="text-gray-600" />
          </button>
        </div>
      ))}

      {/* Owned Tokens */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Your Assets</h4>
        {supportedNetworks.map((net) => (
          <div key={net.symbol} className="flex justify-between items-center bg-gray-50 border rounded-md p-3 mb-2">
            <div className="flex items-center space-x-2">
              <img src={net.logo} alt={net.name} className="w-5 h-5" />
              <span className="text-sm">{net.name}</span>
            </div>
            <span className="text-sm text-gray-500">0</span>
          </div>
        ))}
      </div>
    </div>
  );
}
