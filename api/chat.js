import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const message = req.body.message.toLowerCase()
  const filePath = path.join(process.cwd(), 'properties.json')
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  const cityMatch = message.match(/in ([a-zA-Z\s]+)/)
  const priceMatch = message.match(/under \$?(\d+)/)

  const city = cityMatch ? cityMatch[1].trim().replace(/\b\w/g, l => l.toUpperCase()) : null
  const price = priceMatch ? parseInt(priceMatch[1]) : null

  const results = data.filter(p => {
    if (city && p.city !== city) return false
    if (price && p.price >= price) return false
    return true
  })

  if (results.length > 0) {
    res.status(200).json({
      reply: `Found ${results.length} apartments under $${price} in ${city}.`,
      results
    })
  } else {
    res.status(200).json({
      reply: 'No results found.',
      results: []
    })
  }
}
