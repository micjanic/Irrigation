import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import Database from './server/utils/database'
import irrigationRouter from './server/resources/irrigation/irrigation.router'

import serverInit from './server/serverInit'

const app = express()
const staticMiddleware = express.static('dist')
app.use(staticMiddleware)
app.use(helmet())

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json())

// enabling CORS for all requests
app.use(cors())

// adding morgan to log HTTP requests
app.use(morgan('combined'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + 'dist/index.html')
})

app.use('/api/irrigation', irrigationRouter)

const port = 3001

const start = async () => {
    try {
        await new Database()
        app.listen(port, () => {
            console.log(`now listening on ${port}`)
        })
        await serverInit()
    } catch (e) {
        console.error(e)
    }
}

start()
