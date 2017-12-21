const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users-controller')


/* GET users Endpoint. */

// Login Find OR Create User
router.post('/login' , UserController )

// Delete user
router.delete('/:id', )

// Find all user
router.get('/',)

// Find One user by ID
router.get('/:id', )


module.exports = router;
