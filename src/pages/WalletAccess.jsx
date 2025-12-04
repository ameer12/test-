import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';
import { ethers } from 'ethers';

function WalletAccess() {
  const [mode, setMode] = useState('create');
  const [privateKey, setPrivateKey] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreate = () => {
    const newWallet = ethers.Wallet.createRandom();
    localStorage.setItem('privateKey', newWallet.privateKey);
    localStorage.setItem('walletAddress', newWallet.address);
    navigate('/wallet');
  };

  const handleImport = (e) => {
    e.preventDefault();
    try {
      const importedWallet = new ethers.Wallet(privateKey.trim());
      localStorage.setItem('privateKey', importedWallet.privateKey);
      localStorage.setItem('walletAddress', importedWallet.address);
      navigate('/wallet');
    } catch (err) {
      setError('Invalid private key');
    }
  };

  return (
    <div className="auth-container">
      <div className="circle top-right" />
      <div className="circle bottom-left" />

      <div className="auth-box">
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setMode('create')}
            className={`auth-tab ${mode === 'create' ? 'active-tab' : ''}`}
          >
            🪙 Create Wallet
          </button>
          <button
            onClick={() => setMode('import')}
            className={`auth-tab ${mode === 'import' ? 'active-tab' : ''}`}
          >
            🔑 Import Wallet
          </button>
        </div>

        {mode === 'create' && (
          <div className="text-center">
            <h2 className="auth-title">Create Wallet</h2>
            <p className="auth-subtitle">Generate a new Ethereum wallet</p>
            <button onClick={handleCreate} className="auth-button mt-6">
              Generate Wallet
            </button>
          </div>
        )}

        {mode === 'import' && (
          <form className="auth-form" onSubmit={handleImport}>
            <h2 className="auth-title">Import Wallet</h2>
            <p className="auth-subtitle">Enter your private key</p>

            <textarea
              placeholder="Private Key"
              className="auth-input"
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
              rows={4}
            />

            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

            <button type="submit" className="auth-button">Import</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default WalletAccess;
