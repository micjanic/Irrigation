import IrrigationState from './IrrigationState'
import { TICK_RATE } from './constants'

function serverInit() {
    console.log('and now my watch begins')

    const irrigationState = new IrrigationState()

    const checkStatus = () => {
        const now = Date.now()
        irrigationState.tick()
    }
    checkStatus()
    setInterval(checkStatus, TICK_RATE)
}

export default serverInit
