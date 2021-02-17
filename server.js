const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()


app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// Static on  production build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}


// Config server
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || 'localhost'

app.listen(PORT, err => {
    err 
        ? console.log('❌ Server is not running. ' + err)
        : console.log(`✔️  Server is running on http://${HOST}:${PORT}`)
})