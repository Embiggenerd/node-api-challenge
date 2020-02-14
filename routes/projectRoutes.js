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
        res.status(201).json(newProject)
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

router.delete('/:id', validateProjectID, async (req, res, next) =>{
    try {
        await remove(req.projectID)
        res.json(req.projectID)
    } catch (e) {
        next(e)
    }
})

router.get('/:id/actions', validateProjectID, async(req, res, next) => {
    try {
        const actions = await getProjectActions(req.projectID)
        res.json(actions)
    } catch (e) {
        next(e)
    }
})
module.exports = router