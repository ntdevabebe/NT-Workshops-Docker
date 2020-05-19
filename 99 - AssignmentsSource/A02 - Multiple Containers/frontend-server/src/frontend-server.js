const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const os = require('os')
const axios = require('axios')


app.get("/",
    (req, res ) => {
        axios.get(process.env.BACKEND_SERVER_ADDRESS || 'http://backend:3001')
        .then( response => res.send(`axios response: ${response.data}`))
        .catch( err =>  res.send({...err}))
    }
)

app.listen(PORT, () => console.log(`${os.hostname} is listning on http://localhost:${PORT}`))
