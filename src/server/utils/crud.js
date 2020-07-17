import mongoose from 'mongoose'

export const getOne = model => async (req, res) => {}

export const getMany = model => async (req, res) => {
    try {
        const doc = await model.find({})
        res.status(201).json(doc)
    } catch (e) {
        console.error(e)
        res.status(400).end()
    }
}

export const createOne = model => async (req, res) => {
    try {
        const doc = await model.create({
            _id: new mongoose.Types.ObjectId(),
            time: req.body.time,
        })
        res.status(201).json({ data: doc })
    } catch (e) {
        console.error(e)
        res.status(400).end()
    }
}

export const updateOne = model => async (req, res) => {}

export const removeOne = model => async (req, res) => {
    try {
        const removed = await model.findOneAndRemove({
            _id: req.params.id,
        })
        if (!removed) {
            return res.status(400).end()
        }
        return res.status(200).json({ data: removed })
    } catch (e) {
        console.error(e)
        res.status(400).end()
    }
}

export const crudControllers = model => ({
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    getMany: getMany(model),
    getOne: getOne(model),
    createOne: createOne(model),
})
