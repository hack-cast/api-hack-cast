const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users-controller')


/* GET users Endpoint. */

// Login Find OR Create User
router.post('/login', UsersController.login)

// Delete user
router.delete('/:id', UsersController.deleteUser)

// Find all user
router.get('/', UsersController.findAllUser)

// Find One user by ID
router.get('/:id', UsersController.findUserById )


module.exports = router;
