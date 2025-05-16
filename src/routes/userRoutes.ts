import express from 'express';
import {loadUsers,deleteAllUsers,deleteUser,getUserById,updateUser,addUser} from '../controllers/userController';

const router = express.Router();

router.get('/load', loadUsers);
router.get('/users/:userId', getUserById); 
router.delete('/users', deleteAllUsers);
router.delete('/users/:userId', deleteUser);
router.post('/users', addUser); 
router.put('/users/:userId', updateUser);

export default router;
