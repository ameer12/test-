import React, { useState, useEffect } from 'react';
import {
  FaTelegramPlane,
  FaThumbtack,
  FaQrcode,
} from 'react-icons/fa';
import {
  FiChevronUp,
  FiCopy,
} from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const walletAddress = '0xdfc8ae8f1d127f59292a7ec5dea52dde0b9ffe91';

const networks = [
  { name: 'Ethereum', symbol: 'ETH' },
  { name: 'Base', symbol: 'BASE' },
  { name: 'Linea', symbol: 'LINEA' },
  { name: 'Arbitrum', symbol: 'ARB' },
  { name: 'BNB Chain', symbol: 'BNB' },
  { name: 'OP', symbol: 'OP' },
  { name: 'Polygon', symbol: 'MATIC' },
  { name: 'Solana', symbol: 'SOL' },
];

export default function Wallet() {
  const [showAccounts, setShowAccounts] = useState(false);
  const [balance, setBalance] = useState(0);
  const [change, setChange] = useState(0);
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    toast.configure();
  }, []);

  const copyAddress = (address) => {
    navigator.clipboard.writeText(address);
    toast.success('Address copied ✓', {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans p-4 pb-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <button
            onClick={() => setShowAccounts(!showAccounts)}
            className="text-sm font-semibold text-gray-700 flex items-center"
          >
            Account 1 <FiChevronUp className="ml-1 rotate-180" />
          </button>
          {showAccounts && (
            <div className="absolute left-0 top-10 w-full bg-white shadow-md rounded-md p-4 z-10">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Account 1</span>
                <button className="border rounded-md px-2 py-1 text-blue-600 font-bold text-lg">+</button>
              </div>
              <button className="text-sm text-blue-600">Create Account</button>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <button title="Show QR Code">
            <FaQrcode className="text-gray-600 text-lg" />
          </button>
          <button onClick={() => copyAddress(walletAddress)} title="Copy Address">
            <FiCopy className="text-gray-600 text-lg" />
          </button>
        </div>
      </div>

      {/* Balance Section */}
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <div className="text-sm font-semibold text-gray-600 mb-1">Balance</div>
        <div className="text-3xl font-bold text-gray-800">
          {balance} <span className="text-lg">$</span>
        </div>
        <div className="text-sm text-gray-500 mt-1">
          {change.toFixed(2)}$ <span className="text-xs">({balance > 0 ? `${((change / balance) * 100).toFixed(2)}%` : '0.00%'})</span>
        </div>
      </div>

      {/* Action Buttons */}
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

      {/* Token List */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search all tokens"
          className="w-full border rounded-md px-3 py-2 text-sm mb-4"
        />
        <div className="text-sm font-semibold text-gray-600 mb-2">Tokens</div>
        {tokens.length === 0 ? (
          <div className="text-sm text-gray-500">No tokens available</div>
        ) : (
          tokens.map((token, index) => (
            <div key={`${token.symbol}-${index}`} className="flex justify-between items-center bg-white border rounded-md p-3 mb-2">
              <div>
                <div className="font-semibold">{token.name}</div>
                <div className="text-xs text-gray-500">{token.network}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">{token.amount} {token.symbol}</div>
                <div className="text-xs text-gray-500">${token.usdValue}</div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Receive Panel */}
      <div className="space-y-4">
        {networks.map((net) => (
          <div key={net.symbol} className="flex justify-between items-center bg-white border rounded-md p-3">
            <div>
              <div className="font-semibold text-sm">{net.name}</div>
              <div className="text-xs text-gray-500">{walletAddress}</div>
            </div>
            <button onClick={() => copyAddress(walletAddress)}>
              <FiCopy className="text-gray-600" />
            </button>
          </div>
        ))}

        {/* Owned Tokens */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Your Assets</h4>
          {networks.map((net) => (
            <div key={net.symbol} className="flex justify-between items-center bg-gray-50 border rounded-md p-3 mb-2">
              <span className="text-sm">{net.name}</span>
              <span className="text-sm text-gray-500">0</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
