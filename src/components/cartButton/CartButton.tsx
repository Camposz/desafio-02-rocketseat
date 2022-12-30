import { CartButtonContainer, CartIcon } from './styles';

interface CartButtonProps {
	background: string;
	hover?: string;
	color: string;
}

export const CartButton = ({ background, color, hover }: CartButtonProps) => {
	return (
		<CartButtonContainer background={background} hover={hover}>
			<CartIcon color={color} />
		</CartButtonContainer>
	);
};
