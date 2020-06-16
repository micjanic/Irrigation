const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello')
})

export const start = async () => {
    try {
        //await connect()
        app.listen(config.port, () => {
            console.log(`REST API on http://localhost:${config.port}/api`)
        })
    } catch (e) {
        console.error(e)
    }
}
