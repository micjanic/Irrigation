import mongoose from 'mongoose'

const irrigationSchema = new mongoose.Schema({
    time: {
        _id: mongoose.Types.ObjectId,
        type: String,
        required: true,
    },
    createdOn: Date,
    waterNow: String,
    active: Boolean,
})

export const Irrigation = mongoose.model(
    'Irrigation',
    irrigationSchema,
    'Irrigation'
)
