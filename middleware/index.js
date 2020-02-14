const { get } = require('../data/helpers/projectModel')
const actionModel = require('../data/helpers/actionModel')

const validatePostProject = (req, res, next) => {
    try {
        if (!req.body) {
            const noBody = new Error('Project data missing')
            noBody.httpStatusCode = 400
            throw noBody
        }

        const { name, description, completed } = req.body
        if (!description || !name) {
            const incomplete = new Error('Required field missing')
            incomplete.statusCode = 400
            throw incomplete
        }

        next()
    } catch (e) {
        next(e)
    }
}

const validateProjectID = async (req, res, next) => {
    try {

        if (!req.params.id) {
            const noID = new Error('Project ID required')
            noID.httpStatusCode = 400
            throw noID
        }

        const project = await get(req.params.id)
        if (!project) {
            const noSuchProject = new Error('Project with that ID does not exist')
            noSuchProject.httpStatusCode = 404
            throw noSuchProject
        }

        req.projectID = req.params.id
        next()
    } catch (e) {
        next(e)
    }
}

const validateActionID = async (req, res, next) => {
    try {
        if (!req.params.id) {
            const noID = new Error('Action ID required')
            noID.httpStatusCode = 400
            throw noID
        }

        const action = await actionModel.get(req.params.id)
        if (!action) {
            const noSuchAction = new Error('Action with that ID does not exist')
            noSuchAction.httpStatusCode = 404
            throw noSuchAction
        }

        req.actionID = req.params.id
        next()
    } catch (e) {
        next(e)
    }
}

const validateActionBody = (req, res, next) => {
    try {
        if (!req.body) {
            const noBody = new Error('Project data missing')
            noBody.httpStatusCode = 400
            throw noBody
        }

        const { notes, description } = req.body
        if (!description || !notes) {
            const incomplete = new Error('Required field missing')
            incomplete.statusCode = 400
            throw incomplete
        }

        next()
    } catch (e) {
        next(e)
    }
}

module.exports = {
    validatePostProject,
    validateProjectID,
    validateActionID,
    validateActionBody
}