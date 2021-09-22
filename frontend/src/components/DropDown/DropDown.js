import React, { useState, useContext } from 'react';
import { Context } from '../../context';
import {
	Main,
	DropDownContainer,
	DropDownHeader,
	DropDownList,
	DropDownListContainer,
	ListItem,
} from './DropDown.elements';
const DropDown = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(!isOpen);
	const { state, dispatch } = useContext(Context);

	const { user } = state;
	return (
		<Main>
			<DropDownContainer>
				<DropDownHeader onClick={toggling}>
					{user && user.name}
				</DropDownHeader>
				{isOpen && (
					<DropDownListContainer>
						<DropDownList>{children}</DropDownList>
					</DropDownListContainer>
				)}
			</DropDownContainer>
		</Main>
	);
};

export default DropDown;
