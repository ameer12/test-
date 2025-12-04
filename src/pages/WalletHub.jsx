import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { FiCopy } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function WalletHub() {
  const [wallet, setWallet] = useState(null);
  const [view, setView] = useState('main');
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [sendAmount, setSendAmount] = useState('');

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

  const handleSwap = () => {
    alert(`Swapping ${amount} ${fromToken} to ${toToken}...`);
  };

  const handleSend = async () => {
    try {
      const provider = ethers.getDefaultProvider();
      const connectedWallet = wallet.connect(provider);
      const tx = await connectedWallet.sendTransaction({
        to: recipient,
        value: ethers.utils.parseEther(sendAmount),
      });
      await tx.wait();
      toast.success('Transaction sent ✓', { position: 'top-center', autoClose: 2000 });
    } catch (err) {
      toast.error('Transaction failed', { position: 'top-center', autoClose: 2000 });
    }
  };

  if (!wallet) return <div className="p-4">Loading wallet...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wallet Center</h1>

      <div className="flex space-x-4 mb-6">
        <button onClick={() => setView('main')} className="bg-gray-200 px-4 py-2 rounded">💼 My Wallet</button>
        <button onClick={() => setView('create')} className="bg-gray-200 px-4 py-2 rounded">🪙 Create Wallet</button>
        <button onClick={() => setView('swap')} className="bg-gray-200 px-4 py-2 rounded">🔄 Swap Tokens</button>
        <button onClick={() => setView('send')} className="bg-gray-200 px-4 py-2 rounded">📤 Send</button>
      </div>

      {view === 'main' && (
        <div>
          <h2 className="text-xl font-bold mb-4">Your Wallet</h2>
          <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
            <div className="text-sm font-mono text-gray-700">{wallet.address}</div>
            <button onClick={copyAddress}>
              <FiCopy className="text-gray-600" />
            </button>
          </div>
        </div>
      )}

      {view === 'create' && (
        <div>
          <h2 className="text-xl font-bold mb-4">Create New Wallet</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="mb-2"><strong>Address:</strong> {wallet.address}</p>
            <p className="mb-2"><strong>Private Key:</strong> {wallet.privateKey}</p>
          </div>
        </div>
      )}

      {view === 'swap' && (
        <div>
          <h2 className="text-xl font-bold mb-4">Swap Tokens</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="From Token"
              value={fromToken}
              onChange={(e) => setFromToken(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="To Token"
              value={toToken}
              onChange={(e) => setToToken(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <button
              onClick={handleSwap}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Swap
            </button>
          </div>
        </div>
      )}

      {view === 'send' && (
        <div>
          <h2 className="text-xl font-bold mb-4">Send ETH</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Recipient Address"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="number"
              placeholder="Amount in ETH"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
            }
