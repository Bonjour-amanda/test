const express = require('express');
const passport = require('passport');
const router = express.Router();
// const auth = require('../middlewares/auth');
const userController = require('../controllers/users');


// GET ALL User
router.get('/allMenu', userController.getAllUser)

// GET SINGLE User BY ID
router.get('/oneUser/:id', userController.getOneUserId)

// CREATE new User
router.post('/newUser', userController.addUser)

// UPDATE User
router.put('/updateUser/:id', userController.updateUser)

// DELETE User
router.delete('/deleteUser/:id', userController.deleteUser)


// export router
module.exports = router; 