// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './client/components/App'

// ReactDOM.render(<App />, document.getElementById('app'))

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import Database from './server/utils/database'
import irrigationRouter from './server/resources/irrigation/irrigation.router'

const app = express()

// adding Helmet to enhance your API's security
app.use(helmet())

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json())

// enabling CORS for all requests
app.use(cors())

// adding morgan to log HTTP requests
app.use(morgan('combined'))

app.use('/api/irrigation', irrigationRouter)

const start = async () => {
    const port = process.env.PORT || 3001
    try {
        await new Database()
        app.listen(port, () => {
            console.log(`http://localhost:${port}/api`)
        })
    } catch (e) {
        console.error(e)
    }
}

start()
