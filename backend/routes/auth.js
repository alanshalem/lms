import express from 'express';
//controllers
import { register, login } from '../controllers/auth';

const router = express.Router();

//routes
router.post('/register', register);
router.post('/login', login);

module.exports = router;
