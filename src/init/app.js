import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'

require('dotenv').config()

import { sessionOptions, corsOptions } from './config'
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session(sessionOptions))
app.use(cors(corsOptions))
app.use(morgan('dev'))

// Static on  production build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../', 'client', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../', 'client', 'build', 'index.html'))
    })
}

// Endpoint
export { app }