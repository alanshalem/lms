//importo el modelo de usuario
import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid';
import AWS from 'aws-sdk';

const awsConfig = {
	accessKeyId: process.env.AWS_ACCESS_KEY,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION,
	apiVersion: process.env.AWS_API_VERSION,
};

const SES = new AWS.SES(awsConfig);

export const register = async (req, res) => {
	// res.json('REGISTER USER RESPONSE FROM CONTROLLER');
	try {
		console.log(req.body);
		const { name, lastname, email, password } = req.body;
		//validacion
		if (!name) {
			return res.status(400).send(`NAME IS REQUIRED`);
		}
		if (!lastname) {
			return res.status(400).send(`LAST NAME IS REQUIRED`);
		}
		if (!password || password.length < 6) {
			return res
				.status(400)
				.send(
					`PASSWORD IS REQUIRED AND SHOULD BE MIN 6 CHARACTERS LONG`
				);
		}
		//valido que el usuario no exista por el email
		let userExist = await User.findOne({ email }).exec();
		if (userExist) {
			return res.status(400).send(`EMAIL IS TAKEN`);
		}

		//hasheo el password
		const hashedPassword = await hashPassword(password);

		//register
		const user = new User({
			name,
			lastname,
			email,
			password: hashedPassword,
		});

		//guardo el usuario
		await user.save();
		console.log(`SAVED USER: ${user}`);
		return res.status(200).json({ ok: true });
	} catch (err) {
		console.log(err);
		return res.status(400).send(`ERROR: ${err}`);
	}
};

export const login = async (req, res) => {
	try {
		// console.log(req.body);
		const { email, password } = req.body;
		//validacion
		if (!password || password.length < 6) {
			return res
				.status(400)
				.send(
					`PASSWORD IS REQUIRED AND SHOULD BE MIN 6 CHARACTERS LONG`
				);
		}
		//chequeo que exista el usuario
		let user = await User.findOne({ email }).exec();
		if (!user) {
			return res.status(400).send(`NO USER FOUND`);
		}
		//chequeo password
		const match = await comparePassword(password, user.password);

		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: '1m',
		});
		//return user and token to client, exclude hashed password
		user.password = undefined;
		// send token in cookie
		res.cookie('token', token, {
			httpOnly: true,
			// secure: true, //solo funciona en https
		});
		//send user as json response
		res.json(user);
	} catch (error) {
		return res.status(400).send('ERROR. TRY AGAIN.');
	}
};

export const logout = async (req, res) => {
	try {
		res.clearCookie('token');
		return res.json({ message: 'SIGNOUT SUCCESS' });
	} catch (error) {
		console.log(error);
	}
};

export const currentUser = async (req, res) => {
	try {
		const user = await User.findById(req.user._id)
			.select('-password')
			.exec();
		console.log(`CURRENT USER ${user}`);
		return res.json({ ok: true });
	} catch (error) {
		console.log(error);
	}
};

export const sendTestEmail = async (req, res) => {
	// console.log('SEND EMAIL');
	// res.json({ ok: true });
	const params = {
		Source: process.env.EMAIL_FROM,
		Destination: {
			ToAddresses: [process.env.EMAIL_FROM],
		},
		ReplyToAddresses: [process.env.EMAIL_FROM],
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: `
						<html>
							<h1>Reset password link</h1>
							<p>Por favor, haz click en el siguiente link para resetear tu contraseña</p>
						</html>`,
				},
			},
			Subject: {
				Charset: 'UTF-8',
				Data: 'Password Reset Link',
			},
		},
	};
	const emailSent = SES.sendEmail(params).promise();

	emailSent
		.then((data) => {
			console.log(data);
			return res.json({ ok: true });
		})
		.catch((err) => {
			console.log(err);
			return res.json({ ok: false });
		});
};

export const forgotPassword = async (req, res) => {
	try {
		const { email } = req.body;
		// console.log(email);
		const shortCode = nanoid(6).toUpperCase();
		const user = await User.findOneAndUpdate(
			{ email },
			{ passwordResetCode: shortCode }
		);
		if (!user) return res.status(400).send(`USER NOT FOUND`);
		//PREPARAMOS PARA EL EMAIL
	} catch (error) {
		res.send(`AN ERROR OCURRED`);
		console.log(error);
	}
};
