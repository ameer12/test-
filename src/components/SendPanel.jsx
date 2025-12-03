import React from 'react';

export default function SendPanel({ tokens = [] }) {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search all tokens"
        className="w-full border rounded-md px-3 py-2 text-sm mb-4"
      />
      <div className="text-sm font-semibold text-gray-600 mb-2">Tokens</div>

      {tokens.length === 0 ? (
        <div className="text-sm text-gray-500">No tokens available</div>
      ) : (
        tokens.map((token) => (
          <div
            key={token.symbol}
            className="flex justify-between items-center bg-white border rounded-md p-3 mb-2"
          >
            <div>
              <div className="font-semibold">{token.name}</div>
              <div className="text-xs text-gray-500">{token.network}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold">
                {token.amount} {token.symbol}
              </div>
              <div className="text-xs text-gray-500">${token.usdValue}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
