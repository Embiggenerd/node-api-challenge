const express = require('express')
const { validatePostProject } = require('../middleware')

const {
    get,
    insert,
    update,
    remove,
    getProjectActions,
} = require('../data/helpers/projectModel');

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const projects = await get()
        res.json(projects)
    } catch (e) {
        next(e)
    }
    res.json({ projectsrouter: true })
})

router.post('/', validatePostProject, async (req, res, next) => {
    try {
        const newProject = await insert(req.body)
        res.json(newProject)
    } catch (e) {
        next(e)
    }
})

module.exports = router