const express = require('express')
const app = express()
const BACKEND_PORT = process.env.BACKEND_PORT || 3001
const os = require('os')
const ip = require('ip')

app.get("/", (req, res) => res.send(`Greatings from backend server ${os.hostname} running on ip ${ip.address()}:${BACKEND_PORT}`))

app.listen(BACKEND_PORT, () => console.log(`${os.hostname} is listning on http://localhost:${BACKEND_PORT}`))
