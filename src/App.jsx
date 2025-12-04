import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Property3D from './pages/Property3D';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import Chat from './pages/Chat';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import WalletAccess from './pages/WalletAccess';

// ✅ استيراد واجهة المحفظة الجديدة وصفحاتها
import Wallet from './pages/Wallet';
import Buy from './pages/Buy';
import Swap from './pages/Swap';
import Send from './pages/Send';
import Receive from './pages/Receive';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Properties />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />
            <Route path="/property-3d" element={<Property3D />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/wallet/buy" element={<Buy />} />
            <Route path="/wallet/swap" element={<Swap />} />
            <Route path="/wallet/send" element={<Send />} />
            <Route path="/wallet/receive" element={<Receive />} />
            <Route path="/wallet/access" element={<WalletAccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />

        <Link
          to="/chat"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#007bff',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 1000
          }}
        >
          💬 Chat with Bot
        </Link>
      </div>
    </Router>
  );
}

export default App;
