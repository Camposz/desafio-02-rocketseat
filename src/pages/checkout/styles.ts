import styled from 'styled-components';

export const CheckoutContainer = styled.div`
	display: grid;
	grid-template-columns: 44vw 31vw;
	gap: 2rem;
	align-items: flex-start;
`;

export const CardTittle = styled.h1`
	font-size: 1.1rem;
	font-weight: bold;
	margin-bottom: 1rem;
`;
export const CardResumeContainer = styled.div`
	background: ${({ theme }) => theme.card};
	padding: 0 2.5rem 2.5rem 2.5rem;
	border-radius: 6px 44px 6px 44px;
`;

export const SelectedCoffeeList = styled.div``;

export const CheckoutLeftContainer = styled.div`
	display: flex;
	gap: 20px;

	@media only screen and (max-width: 1309px) {
		align-self: center;
	}
`;

export const CheckoutCartItemContainer = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.button};
	padding: 24px 0;
	display: flex;
	justify-content: space-between;

	img {
		height: 4rem;
		width: 4rem;
		align-self: center;
	}

	@media only screen and (max-width: 1309px) {
		flex-direction: column;
	}
`;
export const CheckoutCartItemTittle = styled.span`
	color: ${({ theme }) => theme.subtitle};
	font-size: 1rem;
	font-weight: 400;
`;

export const CounterAndRemoveContainer = styled.div`
	display: flex;
	margin-top: 8px;
	gap: 8px;
`;
export const PriceText = styled.span`
	color: ${({ theme }) => theme.text};
	font-weight: bold;

	@media only screen and (max-width: 1309px) {
		margin-top: 15px;
		align-self: center;
	}
`;
export const EmptyCartText = styled.div`
	padding-top: 2.4rem;
`;
export const ResumeContainer = styled.div`
	margin-top: 24px;
`;
export const ResumeItenContainer = styled.div`
	margin-top: 10px;

	display: flex;
	justify-content: space-between;
`;
export const ResumeItenTittle = styled.span`
	font-size: 0.8rem;
`;

export const ResumeTotalText = styled.span`
	font-size: 1.3rem;
	font-weight: bold;
	color: ${({ theme }) => theme.subtitle};
`;

export const ResumeItenPrice = styled.span``;

export const ConfirmButton = styled.button`
	background: ${({ theme }) => theme.yellow};
	color: ${({ theme }) => theme.white};
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px;
	border-radius: 6px;
	font-size: 0.85rem;
	margin-top: 24px;
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		background: ${({ theme }) => theme.yellowDark};
	}
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 32px;

	input {
		background: ${({ theme }) => theme.input};
		border: 1px solid ${({ theme }) => theme.button};
		border-radius: 4px;
		color: ${({ theme }) => theme.text};
		font-size: 0.85rem;
		padding: 10px;
		margin-top: 16px;
		&::placeholder {
			color: ${({ theme }) => theme.label};
		}
		&:focus {
			border: 1px solid ${({ theme }) => theme.yellowDark};
		}
	}

	div {
		display: flex;
		gap: 12px;
	}
`;

export const FormTittleContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;

	div {
		display: flex;
		flex-direction: column;
	}
`;

export const FormSubtittle = styled.span`
	color: ${({ theme }) => theme.text};
	font-size: 0.8rem;
`;
export const FormTittle = styled.span`
	color: ${({ theme }) => theme.subtitle};
`;

export const CardTittleContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;

	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
`;

export const CardLeftContainer = styled(CardResumeContainer)`
	padding: 2.5rem;
	border-radius: 6px;
`;

export const Cep = styled.input`
	width: 31%;
`;
export const Rua = styled.input``;
export const Numero = styled.input`
	width: 31%;
`;
export const Complemento = styled.input`
	flex: 1;
`;
export const Bairro = styled.input`
	width: 31%;
`;
export const Cidade = styled.input`
	flex: 1;
`;
export const Uf = styled.input`
	width: 9%;
`;
export const PaymentContainer = styled(CardLeftContainer)`
	margin-top: 12px;
`;
export const PaymentButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;
	margin-top: 32px;

	button {
		padding: 24px;
		background: ${({ theme }) => theme.button};
		border-radius: 6px;
		flex: 1;
		transition: 0.2s;
		cursor: pointer;
		gap: 12px;
		display: flex;
		align-items: center;
		border: 2px solid transparent;

		&:hover {
			background: ${({ theme }) => theme.hover};
		}

		&:active {
			background: ${({ theme }) => theme.purpleLight};
			border: 2px solid ${({ theme }) => theme.purple};
		}
	}
`;
