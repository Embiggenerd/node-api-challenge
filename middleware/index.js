const { get } = require('../data/helpers/projectModel')

const validatePostProject = (req, res, next) => {
    try {
        if(!req.body){
            const noBody = new Error('Project data missing')
            noBody.httpStatusCode = 400
            throw noBody
        }
        
        const { name, description, completed } = req.body
        if( !description || !name){
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

        if(!req.params.id){
            const noID = new Error('Project ID required')
            noID.httpStatusCode = 400
            throw noID
        }

        const project = await get(req.params.id)
        if(!project){
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

module.exports = {
    validatePostProject,
    validateProjectID
}