import { Minus, Plus } from 'phosphor-react';
import styled from 'styled-components';

const PlusIcon = styled(Plus).attrs({
	size: 20,
	weight: 'bold',
})`
	color: ${({ theme }) => theme.purple};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.purpleDark};
	}
`;

const MinusIcon = styled(Minus).attrs({
	size: 20,
	weight: 'bold',
})`
	color: ${({ theme }) => theme.purple};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.purpleDark};
	}
`;

const CounterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.button};
	padding: 8px;
	border-radius: 6px;
	gap: 8px;
	max-width: 5rem;
	font-size: 0.8rem;
`;

export { PlusIcon, MinusIcon, CounterContainer };
