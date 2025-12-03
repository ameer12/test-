import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { FiCopy } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function CreateWallet() {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const savedKey = localStorage.getItem('privateKey');
    if (savedKey) {
      const existingWallet = new ethers.Wallet(savedKey);
      setWallet(existingWallet);
    } else {
      const newWallet = ethers.Wallet.createRandom();
      localStorage.setItem('privateKey', newWallet.privateKey);
      localStorage.setItem('walletAddress', newWallet.address);
      setWallet(newWallet);
    }
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText(wallet.address);
    toast.success('Address copied ✓', { position: 'top-center', autoClose: 2000 });
  };

  if (!wallet) return <div className="p-4">Loading wallet...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Wallet</h2>
      <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
        <div className="text-sm font-mono text-gray-700">{wallet.address}</div>
        <button onClick={copyAddress}>
          <FiCopy className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
