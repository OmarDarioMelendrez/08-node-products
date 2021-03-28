const { Router } = require('express');
const {
    getAllUsers, 
    createUser, 
    updateUser, 
    updatePartialUser, 
    deleteUser
} = require('../controllers/users');

const router = Router();

router.get('/users', getAllUsers);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.patch('/user/:id', updatePartialUser);
router.delete('/user/:id', deleteUser);

module.exports = router;