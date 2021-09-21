import styled, { keyframes } from 'styled-components';

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const Wrapper = styled.section`
	background: ${({ theme }) => theme.colors.background};
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`;

export const Form = styled.form`
	margin: 0 auto;
	width: 100%;
	max-width: 414px;
	padding: 1.3rem;
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const Input = styled.input`
	max-width: 100%;
	padding: 11px 13px;
	background: #f9f9fa;
	color: #f03d4e;
	margin-bottom: 0.9rem;
	border-radius: 4px;
	outline: 0;
	border: 1px solid rgba(245, 245, 245, 0.7);
	font-size: 20px;
	transition: all 0.3s ease-out;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
	:focus,
	:hover {
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
	}
`;

export const Label = styled.label`
	max-width: 100%;
	padding: 11px 13px;
	font-size: 20px;
	font-family: 'Poppins';
	font-weight: 700;
	color: ${({ theme }) => theme.colors.text}; ;
`;

export const Button = styled.button`
	max-width: 100%;
	padding: 11px 13px;
	color: rgb(253, 249, 243);
	font-weight: 600;
	text-transform: uppercase;
	background: #f03d4e;
	border: none;
	border-radius: 3px;
	outline: 0;
	cursor: pointer;
	margin-top: 0.6rem;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-out;
	:hover {
		background: rgb(200, 50, 70);
		animation: ${jump} 0.2s ease-out forwards;
	}
`;

export const Title = styled.h2`
	font-weight: normal;
	color: #2a2a29;
	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	text-align: center;
`;

export const Text = styled.p`
	max-width: 100%;
	padding: 11px 13px;
	font-size: 20px;
	font-family: 'Poppins';
	font-weight: 700;
	color: ${({ theme }) => theme.colors.text}; ;
`;
