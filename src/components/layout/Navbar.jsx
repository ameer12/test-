import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setLoggedInUser(user);
  }, []);

  const handleWalletClick = () => {
    const hasWallet = localStorage.getItem('walletAddress');
    navigate(hasWallet ? '/wallet' : '/wallet/create');
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Wallet Button (Desktop) */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <svg width="30" height="35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="20" r="10" stroke="#0682ff" />
                <circle cx="15" cy="20" r="6" stroke="#0682ff" strokeWidth="3" />
              </svg>
              <span className="text-2xl font-bold text-primary-600 mt-1.5">City Fund</span>
            </Link>

            {/* Wallet Button (Desktop) */}
            <button
              onClick={handleWalletClick}
              className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
            >
              💳 Sign in your wallet
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            {loggedInUser ? (
              <span className="text-sm font-medium text-primary-600">{loggedInUser}</span>
            ) : (
              <Link
                to="/login"
                className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button + Wallet Button */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              type="button"
              className="text-secondary-600 hover:text-primary-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Wallet Button (Mobile) */}
            <button
              onClick={handleWalletClick}
              className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-700 transition"
            >
              💳
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {loggedInUser ? (
                <span className="block px-3 py-2 text-base font-medium text-primary-600 mx-3">
                  {loggedInUser}
                </span>
              ) : (
                <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md mx-3"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
