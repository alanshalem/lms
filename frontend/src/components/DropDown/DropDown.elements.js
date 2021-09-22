import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.div`
	font-family: sans-serif;
`;

export const DropDownContainer = styled.div`
	width: 10.5em;
`;

export const DropDownHeader = styled.div`
	text-align: center;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
	text-transform: uppercase;
	font-weight: 500;
	color: #64b2ff;
	background: ${({ theme }) => theme.colors.background};
`;

export const DropDownListContainer = styled('div')``;

export const DropDownList = styled.ul`
	z-index: 999;
	height: 100%;
	text-align: center;
	text-transform: uppercase;
	background: ${({ theme }) => theme.colors.background};
	border: 2px solid #${({ theme }) => theme.colors.background};
	box-sizing: border-box;
	color: #3faffa;
	list-style: none;
	font-weight: 500;
	&:first-child {
		padding-top: 0.8em;
	}
`;

export const ListItem = styled.li`
	list-style: none;
	margin-bottom: 0.5em;
`;

export const ListItemLink = styled(LinkR)`
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
