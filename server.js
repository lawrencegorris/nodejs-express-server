const express = require('express')
const app = express()
const port = 9001

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/some-data', (req, res) => {
    res.send('You can post some data here')
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })