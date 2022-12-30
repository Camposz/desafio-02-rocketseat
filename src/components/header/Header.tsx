import { HeaderContainer, HeaderRightContainer, MapPinIcon, UserLocalization } from './styles';

import Logo from '../../assets/logo.svg';
import { CartButton } from '../cartButton/CartButton';
import { defaultTeheme } from '../../styles/themes/default';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<HeaderContainer>
			<NavLink to={'/'} title={'Home'}>
				<img src={Logo} alt='Logomarca da Coffee Delivery' />
			</NavLink>
			<HeaderRightContainer>
				<UserLocalization>
					<MapPinIcon />
					Vila Velha, ES
				</UserLocalization>
				<NavLink to='/checkout' title='Checkout'>
					<CartButton
						background={defaultTeheme.yellowLight}
						color={defaultTeheme.yellowDark}
					/>
				</NavLink>
			</HeaderRightContainer>
		</HeaderContainer>
	);
};
