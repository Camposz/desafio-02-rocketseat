import { ShoppingCart } from 'phosphor-react';
import styled from 'styled-components';

const CartIcon = styled(ShoppingCart).attrs({
	size: 20,
	weight: 'fill',
})``;

interface CartButtonContainerProps {
	background: string;
	hover?: string;
}

const CartButtonContainer = styled.button<CartButtonContainerProps>`
	background: ${({ background }) => background};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 6px;
	padding: 10px;
	transition: 0.2s;

	&:hover {
		background: ${({ hover }) => hover};
	}
`;

export { CartIcon, CartButtonContainer };
