import React, { useState } from 'react';
import { FiRepeat, FiCopy } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function SwapPanel() {
  const [ethAmount, setEthAmount] = useState('');
  const [mUsdAmount, setMusdAmount] = useState('0');
  const receivingAddress = localStorage.getItem('walletAddress') || '0x0000...0000';

  const handleCopy = () => {
    navigator.clipboard.writeText(receivingAddress);
    toast.success('Address copied ✓', { position: 'top-center', autoClose: 2000 });
  };

  const handleKeypad = (value) => {
    if (value === 'C') {
      setEthAmount('');
      setMusdAmount('0');
    } else {
      const newAmount = ethAmount + value;
      setEthAmount(newAmount);
      const estimated = (parseFloat(newAmount) * 180.23).toFixed(2); // مثال سعر
      setMusdAmount(isNaN(estimated) ? '0' : estimated);
    }
  };

  const keypad = ['1','2','3','4','5','6','7','8','9','0','.','C'];

  return (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-xl shadow-md p-4 space-y-2">
        <div className="text-sm text-gray-600">Swap</div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-800">ETH</span>
          <span className="text-sm text-gray-500">Min: 0.0001 ETH</span>
        </div>
        <div className="text-3xl font-bold text-blue-600">{ethAmount || '0'}</div>
      </div>

      <div className="flex justify-center">
        <FiRepeat className="text-blue-500 text-2xl rotate-90" />
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-800">mUSD</span>
          <div className="flex items-center space-x-1">
            <span className="text-xs text-gray-500 font-mono">{receivingAddress.slice(0,6)}...{receivingAddress.slice(-4)}</span>
            <button onClick={handleCopy}>
              <FiCopy className="text-gray-500 text-sm" />
            </button>
          </div>
        </div>
        <div className="text-3xl font-bold text-blue-600">{mUsdAmount}</div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {keypad.map((key) => (
          <button
            key={key}
            onClick={() => handleKeypad(key)}
            className="bg-blue-600 text-white py-3 rounded-md text-lg font-semibold"
          >
            {key}
          </button>
        ))}
      </div>

      <div className="text-center text-sm text-gray-500 mt-2">Select amount</div>
    </div>
  );
        }
