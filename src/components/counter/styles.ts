import { Minus, Plus } from 'phosphor-react';
import styled from 'styled-components';

const PlusIcon = styled(Plus).attrs({
	size: 20,
	weight: 'bold',
})`
	color: ${({ theme }) => theme.purple};

	&:hover {
		color: ${({ theme }) => theme.purpleDark};
	}
`;

const MinusIcon = styled(Minus).attrs({
	size: 20,
	weight: 'bold',
})`
	color: ${({ theme }) => theme.purple};

	&:hover {
		color: ${({ theme }) => theme.purpleDark};
	}
`;

const CounterContainer = styled.div`
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.button};
	padding: 8px;
	border-radius: 6px;
	gap: 8px;
`;

export { PlusIcon, MinusIcon, CounterContainer };
