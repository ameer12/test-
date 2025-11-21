import { Link } from 'react-router-dom'

export default function ChatButton() {
  return (
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
  )
}
