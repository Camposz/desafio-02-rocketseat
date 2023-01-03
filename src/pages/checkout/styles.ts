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

	@media only screen and (max-width: 1309px) {
		align-self: center;
	}
`;

const CheckoutCartItemContainer = styled.div`
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

	@media only screen and (max-width: 1309px) {
		margin-top: 15px;
		align-self: center;
	}
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

const ConfirmButton = styled.button`
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

const FormContainer = styled.div`
	background: ${({ theme }) => theme.card};
	padding: 40px;
	border-radius: 6px;
	width: 100%;

	form {
		display: flex;
		flex-direction: column;

		div {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
	}

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
	}
`;

const FormTittleContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;

	div {
		display: flex;
		flex-direction: column;
	}
`;

const FormSubtittle = styled.span`
	color: ${({ theme }) => theme.text};
	font-size: 0.8rem;
`;
const FormTittle = styled.span`
	color: ${({ theme }) => theme.subtitle};
`;

const Cep = styled.input`
	max-width: 100%;
`;
const Rua = styled.input``;
const Numero = styled.input``;
const Complemento = styled.input``;
const Bairro = styled.input``;
const Cidade = styled.input``;
const Uf = styled.input``;

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
	ConfirmButton,
	FormContainer,
	FormTittleContainer,
	FormSubtittle,
	FormTittle,
	Cep,
	Rua,
	Numero,
	Complemento,
	Cidade,
	Bairro,
	Uf,
};
