import mongoose from 'mongoose'

const irrigationSchema = new mongoose.Schema(
    {
        time: {
            _id: mongoose.Types.ObjectId,
            type: String,
            required: true,
        },
        day: [{ type: String }],
        createdOn: Date,
    },
    {
        timestamps: true,
    }
)

export const Irrigation = mongoose.model(
    'Irrigation',
    irrigationSchema,
    'Irrigation'
)
