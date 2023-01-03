import { ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
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

const CoffeeQuantityBadge = styled.span`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: -40px;
	margin-right: -35px;
	background: ${({ theme }) => theme.yellowDark};
	border-radius: 100px;
	font-size: 0.7rem;
	text-decoration: none;
	cursor: auto;
	width: 20px;
	height: 20px;
	color: ${({ theme }) => theme.white};
`;

export { CartIcon, CartButtonContainer, CoffeeQuantityBadge };
