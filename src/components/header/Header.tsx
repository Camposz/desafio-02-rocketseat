import { HeaderContainer, HeaderRightContainer, MapPinIcon, UserLocalization } from './styles';

import Logo from '../../assets/logo.svg';
import { CartButton } from '../cartButton/CartButton';
import { defaultTeheme } from '../../styles/themes/default';

export const Header = () => {
	return (
		<HeaderContainer>
			<img src={Logo} alt='Logomarca da Coffee Delivery' />
			<HeaderRightContainer>
				<UserLocalization>
					<MapPinIcon />
					Vila Velha, ES
				</UserLocalization>
				<CartButton
					background={defaultTeheme.yellowLight}
					color={defaultTeheme.yellowDark}
				/>
			</HeaderRightContainer>
		</HeaderContainer>
	);
};
