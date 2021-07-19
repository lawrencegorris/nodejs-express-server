const express = require('express')
const app = express()
const port = process.env.port || 9001

const people = require('./People')

app.use(express.static('public'))

app.get('/people', (req, res) => {
    res.status(200).send(people)
})

app.get('/some-data', (req, res) => {
    res.send('You can post some data here :)')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})