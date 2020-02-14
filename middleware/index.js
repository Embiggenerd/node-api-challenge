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

module.exports = {
    validatePostProject
}