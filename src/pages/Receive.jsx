import React from 'react';
import { FiCopy } from 'react-icons/fi';

const walletAddress = '0xdfc8ae8f1d127f59292a7ec5dea52dde0b9ffe91';

const networks = [
  { name: 'Ethereum', symbol: 'ETH', logo: '/logos/eth.png' },
  { name: 'Base', symbol: 'BASE', logo: '/logos/base.png' },
  { name: 'Linea', symbol: 'LINEA', logo: '/logos/linea.png' },
  { name: 'Arbitrum', symbol: 'ARB', logo: '/logos/arbitrum.png' },
  { name: 'BNB Chain', symbol: 'BNB', logo: '/logos/bnb.png' },
  { name: 'OP', symbol: 'OP', logo: '/logos/op.png' },
  { name: 'Polygon', symbol: 'MATIC', logo: '/logos/polygon.png' },
  { name: 'Solana', symbol: 'SOL', logo: '/logos/solana.png' },
];

export default function Receive() {
  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    alert('Address copied ✓');
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold mb-2">Receive</h1>
      {networks.map((net) => (
        <div key={net.symbol} className="flex justify-between items-center bg-white border rounded-md p-3">
          <div className="flex items-center space-x-2">
            <img src={net.logo} alt={net.name} className="w-6 h-6" />
            <div>
              <div className="font-semibold text-sm">{net.name}</div>
              <div className="text-xs text-gray-500">{walletAddress}</div>
            </div>
          </div>
          <button onClick={copyAddress}>
            <FiCopy className="text-gray-600" />
          </button>
        </div>
      ))}
    </div>
  );
}
