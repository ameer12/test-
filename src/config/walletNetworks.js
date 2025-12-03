import { ethers } from 'ethers';

function getOrCreateWallet() {
  const savedKey = localStorage.getItem('privateKey');
  if (savedKey) {
    return new ethers.Wallet(savedKey);
  } else {
    const wallet = ethers.Wallet.createRandom();
    localStorage.setItem('privateKey', wallet.privateKey);
    localStorage.setItem('walletAddress', wallet.address);
    return wallet;
  }
}

export const receivingAddress = localStorage.getItem('walletAddress') || getOrCreateWallet().address;

export const supportedNetworks = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    logo: '/logos/eth.png',
  },
  {
    name: 'Base',
    symbol: 'BASE',
    logo: '/logos/base.png',
  },
  {
    name: 'Linea',
    symbol: 'LINEA',
    logo: '/logos/linea.png',
  },
  {
    name: 'Arbitrum',
    symbol: 'ARB',
    logo: '/logos/arbitrum.png',
  },
  {
    name: 'BNB Chain',
    symbol: 'BNB',
    logo: '/logos/bnb.png',
  },
  {
    name: 'OP',
    symbol: 'OP',
    logo: '/logos/op.png',
  },
  {
    name: 'Polygon',
    symbol: 'MATIC',
    logo: '/logos/polygon.png',
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    logo: '/logos/solana.png',
  },
];
