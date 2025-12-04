import React from 'react';

export default function Send() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Send</h1>
      <input
        type="text"
        placeholder="Search all tokens"
        className="w-full border rounded-md px-3 py-2 text-sm mb-4"
      />
      <p className="text-gray-600">List of tokens will appear here once the user has a balance.</p>
    </div>
  );
}
