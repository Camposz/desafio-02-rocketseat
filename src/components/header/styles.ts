import { MapPin, ShoppingCart } from 'phosphor-react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	padding: 32px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const HeaderRightContainer = styled.div`
	display: flex;
	gap: 12px;
`;

const UserLocalization = styled.div`
	background: ${({ theme }) => theme.purpleLight};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px;
	border-radius: 6px;
	color: ${({ theme }) => theme.purpleDark};
	gap: 4px;
`;

const MapPinIcon = styled(MapPin).attrs({
	size: 20,
	weight: 'fill',
})`
	color: ${({ theme }) => theme.purple};
`;

export { HeaderContainer, HeaderRightContainer, UserLocalization, MapPinIcon };
