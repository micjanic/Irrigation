class IrrigationState {
    constructor() {
        this.current = 'INIT'
    }
    tick() {
        console.log('ticking')
    }
}

export default IrrigationState
