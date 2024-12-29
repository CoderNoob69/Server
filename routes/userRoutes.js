const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser); //get user
router.put('/:id', userController.updateUser); //update user
router.delete('/:id', userController.deleteUser); //delete user
router.get('/user-count', userController.getUserCount);



module.exports = router;
