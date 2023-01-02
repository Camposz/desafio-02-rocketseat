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
	padding: 0 2.5rem 2.5rem 2.5rem;
	border-radius: 6px 44px 6px 44px;
`;

const SelectedCoffeeList = styled.div``;

const CheckoutLeftContainer = styled.div`
	display: flex;
	gap: 20px;
`;

const CheckoutCartItemContainer = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.button};
	padding: 24px 0;
	display: flex;
	justify-content: space-between;

	img {
		height: auto;
		width: 4rem;
	}
`;
const CheckoutCartItemTittle = styled.span`
	color: ${({ theme }) => theme.subtitle};
	font-size: 1rem;
	font-weight: 400;
`;

const CounterAndRemoveContainer = styled.div`
	display: flex;
	margin-top: 8px;
	gap: 8px;
`;
const PriceText = styled.span`
	color: ${({ theme }) => theme.text};
	font-weight: bold;
`;
const EmptyCartText = styled.div`
	padding-top: 2.4rem;
`;
const ResumeContainer = styled.div`
	margin-top: 24px;
`;
const ResumeItenContainer = styled.div`
	margin-top: 10px;

	display: flex;
	justify-content: space-between;
`;
const ResumeItenTittle = styled.span`
	font-size: 0.8rem;
`;

const ResumeTotalText = styled.span`
	font-size: 1.3rem;
	font-weight: bold;
	color: ${({ theme }) => theme.subtitle};
`;

const ResumeItenPrice = styled.span``;

export {
	CheckoutContainer,
	CardTittle,
	CardResumeContainer,
	SelectedCoffeeList,
	CheckoutCartItemContainer,
	CheckoutCartItemTittle,
	CounterAndRemoveContainer,
	PriceText,
	CheckoutLeftContainer,
	EmptyCartText,
	ResumeContainer,
	ResumeItenContainer,
	ResumeItenTittle,
	ResumeItenPrice,
	ResumeTotalText,
};
