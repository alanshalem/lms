import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiMoon, BiSun } from 'react-icons/bi';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Arg from '../../assets/img/arg.svg';
import Uk from '../../assets/img/uk.svg';
import { Context } from '../../context';
import axios from 'axios';
import {
	Container,
	Flag,
	LangIcon,
	LogoContainer,
	Menu,
	MenuItem,
	MenuItemLink,
	MobileIcon,
	ThemeIcon,
	Wrapper,
} from './Navbar.elements';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
const Navbar = ({ theme, toggleTheme }) => {
	const [t, i18n] = useTranslation('global');
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [current, setCurrent] = useState('');

	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(!isOpen);

	const { state, dispatch } = useContext(Context);

	const { user } = state;

	const extracted = process.browser && window.location.pathname;

	//router
	const router = useHistory();

	useEffect(() => {
		process.browser && setCurrent(window.location.pathname);
		console.log(window.location.pathname);
	}, [extracted]);

	const logout = async () => {
		dispatch({ type: 'LOGOUT' });
		window.localStorage.removeItem('user');
		const { data } = await axios.get('/api/logout');
		toast.success(`LOGIN SUCCESSFUL.`);
		router.push('/login');
	};

	return (
		<Container>
			<Wrapper>
				<LogoContainer key="/">
					<Link to="/">{t('navbar.logo')} </Link>
				</LogoContainer>

				<MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
					{showMobileMenu ? <FaTimes /> : <FaBars />}
				</MobileIcon>
				<Menu open={showMobileMenu} selectedKeys={[current]}>
					<MenuItem>
						<MenuItemLink
							onClick={() => setShowMobileMenu(!showMobileMenu)}
						>
							HOME
						</MenuItemLink>
					</MenuItem>
					<MenuItem>
						<MenuItemLink
							onClick={() => setShowMobileMenu(!showMobileMenu)}
						>
							HOME
						</MenuItemLink>
					</MenuItem>
					{user === null && (
						//renderizado condicional
						<>
							<MenuItem
								key="/register"
								onClick={(e) => {
									setCurrent(e.key);
								}}
							>
								<MenuItemLink
									to="/register"
									onClick={() =>
										setShowMobileMenu(!showMobileMenu)
									}
								>
									{t('navbar.register')}
								</MenuItemLink>
							</MenuItem>
							<MenuItem
								key="/login"
								onClick={(e) => {
									setCurrent(e.key);
								}}
							>
								<MenuItemLink
									to="/login"
									onClick={() =>
										setShowMobileMenu(!showMobileMenu)
									}
								>
									{t('navbar.login')}
								</MenuItemLink>
							</MenuItem>
						</>
					)}
					{user !== null && (
						<>
							<MenuItem>
								<MenuItemLink
									to="/"
									onClick={() =>
										setShowMobileMenu(!showMobileMenu)
									}
								>
									<FaUserCircle
										size="30"
										style={{ marginRight: '1rem' }}
									/>
									{`${user && user.name}`}
								</MenuItemLink>
							</MenuItem>
							<MenuItem onClick={logout}>
								<MenuItemLink
									to="/"
									onClick={() =>
										setShowMobileMenu(!showMobileMenu)
									}
								>
									{t('navbar.logout')}
								</MenuItemLink>
							</MenuItem>
						</>
					)}

					<MenuItem>
						<ThemeIcon onClick={toggleTheme}>
							{theme === 'default' ? (
								<BiMoon color="black" onClick={toggleTheme} />
							) : (
								<BiSun color="yellow" onClick={toggleTheme} />
							)}
						</ThemeIcon>
					</MenuItem>
					<MenuItem>
						<LangIcon>
							{i18n.language === 'en' ? (
								<Flag
									src={Arg}
									onClick={() => {
										i18n.changeLanguage('es');
										// console.log(i18n.language);
									}}
								/>
							) : (
								<Flag
									src={Uk}
									onClick={() => {
										i18n.changeLanguage('en');
										// console.log(i18n.language);
									}}
								/>
							)}
						</LangIcon>
					</MenuItem>
				</Menu>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
