import express from 'express';
//controllers
import { register, login, logout } from '../controllers/auth';

const router = express.Router();

//routes
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
