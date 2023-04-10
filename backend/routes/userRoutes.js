const express = require('express');
const passport = require('passport');
const userRouter = express.Router();
const userController = require('../users/userController')

userRouter.route('/signup').post(userController.createUser);

module.exports = userRouter;
