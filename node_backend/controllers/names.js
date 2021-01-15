const namesRouter = require('express').Router()
const Names= require('../models/name')

//GET all names
namesRouter.get('/', async (request, response) => {
    const names = await Names.find({})
    response.json(names)  
    console.log(response)
  })

  module.exports = namesRouter