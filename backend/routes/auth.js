import express from 'express';
//controllers
import {
	register,
	login,
	logout,
	currentUser,
	sendTestEmail,
	forgotPassword,
} from '../controllers/auth';
//middlewares
import { requireSignIn } from '../middlewares';

const router = express.Router();

//routes
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/current-user', requireSignIn, currentUser);
router.get('/send-email', sendTestEmail);
router.post('/forgot-password', forgotPassword);

module.exports = router;
