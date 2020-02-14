const express = require('express')

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
    }catch(e){
        next(e)
    }
    res.json({projectsrouter: true})
})

module.exports = router