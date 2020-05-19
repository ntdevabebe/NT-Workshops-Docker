const express = require('express')
const app = express()
const PORT = 3000
const os = require('os')
const ip = require('ip')


app.get("/", (req, res ) => res.send(`Hello from ${os.hostname} running on ip: ${ip.address()}:${PORT}`))

app.listen(PORT, () => console.log(`${os.hostname} is listning on http://localhost:${PORT}`))
