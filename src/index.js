import express from 'express'
import path from 'path'

const server = express()

const staticMiddleware = express.static('dist')

server.use(staticMiddleware)

server.get('/', function(req, res) {
    res.sendFile(__dirname + 'dist/index.html')
})

const port = 3000
server.listen(port, () => console.log(`listening on ${port}`))
