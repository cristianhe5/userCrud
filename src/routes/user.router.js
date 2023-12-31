const { getAll, create, getOne, remove, update } = require('../controllers/user.controller');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/users")
		.get(getAll)
		.post(create)

userRouter.route("/users/:id")
		.get(getOne)
		.delete(remove)
		.patch(update)


module.exports = userRouter;