import mongoose from 'mongoose'

const irrigationSchema = new mongoose.Schema({
    time: {
        _id: mongoose.Types.ObjectId,
        type: String,
        required: true,
    },
})

//irrigationSchema.index({ list: 1, name: 1 }, { unique: true })

export const Irrigation = mongoose.model('Irrigation', irrigationSchema)
