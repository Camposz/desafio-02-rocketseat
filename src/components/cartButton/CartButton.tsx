import { CartButtonContainer, CartIcon } from './styles';

interface CartButtonProps {
	background: string;
	hover?: string;
	color: string;
	onClick: () => void;
}

export const CartButton = ({ background, color, hover, onClick }: CartButtonProps) => {
	return (
		<CartButtonContainer background={background} hover={hover} onClick={onClick}>
			<CartIcon color={color} />
		</CartButtonContainer>
	);
};
