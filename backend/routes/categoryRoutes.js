const express = require('express');
const passport = require('passport');
const categoryRouter = express.Router();
const categoryController = require('../category/categoryController')

categoryRouter.route('/create').post(categoryController.createCategory);
categoryRouter.route('/get').get(categoryController.getCategory);


module.exports = categoryRouter;
