import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 70px;
	background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
	width: 100%;
	max-width: 1300px;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: auto;
`;

export const LogoContainer = styled.div`
	margin-left: 0.5rem;
	display: flex;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 900;
	font-family: 'Poppins', sans-serif;
	color: #9400d3;
`;

export const Menu = styled.ul`
	z-index: 999;
	height: 100%;
	display: flex;
	justify-content: space-between;
	list-style: none;
	@media screen and (max-width: 960px) {
		background-color: ${({ theme }) => theme.colors.background};
		position: absolute;
		top: 70px;
		left: ${({ open }) => (open ? '0' : '-100%')}; //Import
		width: 100%;
		height: 90vh;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		transition: 0.5s all ease;
	}
`;

export const MenuItem = styled.li`
	height: 100%;
	@media screen and (max-width: 960px) {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const MenuItemLink = styled(LinkR)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 0.5rem 2.5rem;
	color: #64b2ff;
	font-family: sans-serif;
	font-size: 1rem;
	font-weight: 300;
	text-transform: uppercase;
	font-weight: 600;
	text-decoration: none;
	cursor: pointer;
	transition: 0.5s all ease;
	&:hover {
		color: #fff;
		background-color: #64b2ff;
		transition: 0.5s all ease;
		div {
			svg {
				fill: #23394d;
			}
		}
	}
	div {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		svg {
			display: none;
			fill: #64b2ff;
			margin-right: 0.5rem;
		}
	}
	@media screen and (max-width: 960px) {
		width: 100%;
		div {
			width: 30%;
			justify-content: left;
			svg {
				display: flex;
			}
		}
	}
	@media screen and (max-width: 880px) {
		div {
			width: 40%;
			justify-content: left;
			svg {
				display: flex;
			}
		}
	}
	@media screen and (max-width: 500px) {
		div {
			width: 60%;
			justify-content: left;
			svg {
				display: flex;
			}
		}
	}
	@media screen and (max-width: 260px) {
		div {
			width: 100%;
			justify-content: left;
			svg {
				display: flex;
			}
		}
	}
`;

export const ThemeIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 0.5rem 2.5rem;
	font-size: 1.8rem;
	cursor: pointer;
`;

export const LangIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 0.5rem 2.5rem;
	cursor: pointer;
`;

export const Flag = styled.img`
	height: 1.8rem;
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 960px) {
		display: flex;
		align-items: center;
		cursor: pointer;
		svg {
			fill: #64b2ff;
			margin-right: 0.5rem;
		}
	}
`;
