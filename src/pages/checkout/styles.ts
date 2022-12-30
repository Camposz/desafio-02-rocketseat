import styled from 'styled-components';

const CheckoutContainer = styled.div`
	display: grid;
	grid-template-columns: 44vw 31vw;
	gap: 2rem;
	align-items: flex-start;
`;

const CardTittle = styled.h1`
	font-size: 1.1rem;
	font-weight: bold;
	margin-bottom: 1rem;
`;
const CardResumeContainer = styled.div`
	background: ${({ theme }) => theme.card};
	padding: 2.5rem;
	border-radius: 6px 44px 6px 44px;
`;
const SelectedCoffeeList = styled.div``;

export { CheckoutContainer, CardTittle, CardResumeContainer, SelectedCoffeeList };
