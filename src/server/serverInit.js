import IrrigationState from './IrrigationState'
import { TICK_RATE } from './constants'
import fetch from 'node-fetch'

function serverInit() {
    console.log('and now my watch begins')

    const url = 'http://localhost:3001/api/irrigation'

    const getData = async url => {
        try {
            const response = await fetch(url)
            const json = await response.json()
            console.log(json)
        } catch (error) {
            console.log(error)
        }
    }

    const irrigationState = new IrrigationState(getData(url))

    const checkStatus = () => {
        const now = Date.now()
        irrigationState.tick()
    }
    checkStatus()
    setInterval(checkStatus, TICK_RATE)
}

export default serverInit
