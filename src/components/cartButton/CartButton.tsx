import { useContext } from 'react';
import { CartContext, coffeeListTypes } from '../../contexts/CartContext';
import { CartButtonContainer, CartIcon, CoffeeQuantityBadge } from './styles';

interface CartButtonProps {
	background: string;
	hover?: string;
	color: string;
	onClick?: () => void;
	header: boolean;
}

export const CartButton = ({ background, color, hover, onClick, header }: CartButtonProps) => {
	const { coffeeList } = useContext(CartContext);

	const coffeeQuantity = coffeeList.reduce(
		(accumulator: number, coffee: coffeeListTypes) => accumulator + coffee.quantity,
		0
	);

	return (
		<CartButtonContainer background={background} hover={hover} onClick={onClick}>
			{header ? <CoffeeQuantityBadge>{coffeeQuantity}</CoffeeQuantityBadge> : <></>}
			<CartIcon color={color} />
		</CartButtonContainer>
	);
};
