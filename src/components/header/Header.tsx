import {
	CartButton,
	CartIcon,
	HeaderContainer,
	HeaderRightContainer,
	MapPinIcon,
	UserLocalization,
} from './styles';

import Logo from '../../assets/logo.svg';

export const Header = () => {
	return (
		<HeaderContainer>
			<img src={Logo} alt='Logomarca da Coffee Delivery' />
			<HeaderRightContainer>
				<UserLocalization>
					<MapPinIcon />
					Vila Velha, ES
				</UserLocalization>
				<CartButton>
					<CartIcon />
				</CartButton>
			</HeaderRightContainer>
		</HeaderContainer>
	);
};
