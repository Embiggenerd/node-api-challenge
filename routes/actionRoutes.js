const express = require('express')

const { validateActionID } = require('../middleware')

const {
    get,
    insert,
    update,
    remove,
} = require('../data/helpers/actionModel');

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const actions = await get()
        res.json(actions)
    } catch (e) {
        next(e)
    }
})

router.get('/:id', validateActionID, async (req, res, next) => {
    try {
        const actions = await get(req.actionID)
        res.json(actions)
    } catch (e) {
        next(e)
    }
})

module.exports = router