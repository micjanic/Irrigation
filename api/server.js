import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Hello')
})

// export const start = () => {
//     app.listen(3000, () => {
//         console.log(`REST API on http://localhost:3000/api`)
//     })
// }

const configPort = 3000

export const start = async () => {
    try {
        //await connect()
        app.listen(configPort, () => {
            console.log(`REST API on http://localhost:${configPort}/api`)
        })
    } catch (e) {
        console.error(e)
    }
}
