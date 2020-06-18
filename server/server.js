import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import Database from './utils/database'

import irrigationRouter from './resources/irrigation/irrigation.router'

const app = express()

const ads = [{ title: 'Hello, world (again)!' }]

// adding Helmet to enhance your API's security
app.use(helmet())

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json())

// enabling CORS for all requests
app.use(cors())

// adding morgan to log HTTP requests
app.use(morgan('combined'))

app.use('/api/irrigation', irrigationRouter)

// app.listen(3001, () => {
//     console.log(`REST API on http://localhost:3001/api`)
// })

const start = async () => {
    try {
        await new Database()
        app.listen(3001, () => {
            console.log(`REST API on http://localhost:3001/api`)
        })
    } catch (e) {
        console.error(e)
    }
}

start()
