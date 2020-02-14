const express = require('express')
const { validatePostProject, validateProjectID } = require('../middleware')

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

router.put('/:id', validatePostProject, validateProjectID, async (req, res, next) => {
    try {
        const updatedProject = await update(req.projectID, req.body)
        res.json(updatedProject)
    } catch (e) {
        next(e)
    }
})

module.exports = router