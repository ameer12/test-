import { useState } from 'react'

export default function Chat() {
  const [message, setMessage] = useState('')
  const [reply, setReply] = useState('')
  const [results, setResults] = useState([])

  const sendMessage = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    })
    const data = await res.json()
    setReply(data.reply)
    setResults(data.results)
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Chat with Real Estate Bot</h2>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Ask about apartments..."
        style={{ width: '80%', padding: 8 }}
      />
      <button onClick={sendMessage} style={{ marginLeft: 10, padding: 8 }}>
        Send
      </button>
      <div style={{ marginTop: 20 }}>
        <p><strong>Bot:</strong> {reply}</p>
        <ul>
          {results.map(r => (
            <li key={r.id}>
              {r.city} - {r.bedrooms} BR - ${r.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
