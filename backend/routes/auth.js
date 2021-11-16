import express from 'express';
//controllers
import {
	currentUser,
	forgotPassword,
	login,
	logout,
	register,
	sendTestEmail,
} from '../controllers/auth';
//middlewares
import { requireSignIn } from '../middlewares';

//usamos express Router para crear rutas
const router = express.Router();

//routes
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/current-user', requireSignIn, currentUser);
router.get('/send-email', sendTestEmail);
router.post('/forgot-password', forgotPassword);

module.exports = router;
