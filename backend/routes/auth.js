import express from 'express';
//controllers
import {
	currentUser,
	forgotPassword,
	resetPassword,
	login,
	logout,
	register,
	sendTestEmail,
} from '../controllers/auth';
//middlewares
import { requireSignin } from '../middlewares';

//usamos express Router para crear rutas
const router = express.Router();

//routes
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/current-user', requireSignin, currentUser);
router.get('/send-email', sendTestEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;
