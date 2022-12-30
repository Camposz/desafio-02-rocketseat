import { Minus, Plus } from 'phosphor-react';
import styled from 'styled-components';

import BackgroundBlur from '../../assets/background.svg';
import CoffeImage from '../../assets/images/coffeeImage.png';

const BannerContainer = styled.div`
	background-image: url(${BackgroundBlur});
	background-size: 100vw;
	background-position: 50% 50%;
	margin: 0 -11vw;
	padding: 12vh 11vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 32px;

	@media only screen and (max-width: 768px) {
		padding: 3vh 11vw;

		h1 {
		}

		img {
			display: none;
		}
	}
`;
const StoreContainer = styled.div`
	@media only screen and (max-width: 700px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const HomeTittle = styled.h1`
	font-family: 'Baloo 2';
	font-weight: 900;
	font-size: clamp(1.8rem, 3.8vw, 4rem);
	color: ${({ theme }) => theme.title};
`;

const HomeSubtittle = styled.h2`
	font-size: clamp(1rem, 2vw, 1.25rem);

	color: ${({ theme }) => theme.subtitle};
`;

const BenefitsContainer = styled.div`
	margin-top: 66px;
	display: grid;
	gap: 20px;
	grid-template-columns: 1fr 1fr;

	a {
		align-items: center;
		display: flex;
		gap: 10px;
	}
`;

const CoffeeBanner = styled.img.attrs({
	src: CoffeImage,
})`
	height: auto;
	width: 28vw;
`;

const StoreTitlle = styled.h1`
	font-size: 2rem;
	color: ${({ theme }) => theme.subtitle};
`;

const CoffeListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 17vw);
	gap: 32px;
	margin-top: 34px;
	justify-content: space-between;
	margin-bottom: 157px;

	@media only screen and (max-width: 1500px) {
		grid-template-columns: repeat(3, 22vw);
	}

	@media only screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 35vw);
	}
	@media only screen and (max-width: 700px) {
		grid-template-columns: repeat(1, 55vw);
	}
	@media only screen and (max-width: 450px) {
		grid-template-columns: repeat(1, 80vw);
	}
`;

const CoffeCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	background: ${({ theme }) => theme.card};
	border-radius: 6px 36px 6px 36px;
	padding: 0 20px 20px 20px;

	img {
		margin-top: -20px;
		margin-bottom: 12px;
		height: auto;
		width: 120px;
	}

	h1 {
		color: ${({ theme }) => theme.subtitle};
		font-size: 20px;
		margin-top: 16px;
	}
	h2 {
		color: ${({ theme }) => theme.label};
		margin-top: 8px;
	}
`;
const CoffeeCategoryBadge = styled.span`
	background: ${({ theme }) => theme.yellowLight};
	color: ${({ theme }) => theme.yellowDark};
	padding: 4px 8px;
	font-weight: bold;
	font-size: clamp(0.5rem, 1vw, 0.8rem);
	border-radius: 100px;
`;

const CoffeeCategoryContainer = styled.div`
	display: flex;
	gap: 12px;
`;

const Price = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.text};
	font-size: 24px;
`;

const BuyDetailsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-top: 33px;
`;
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

const Counter = styled.div`
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.button};
	padding: 8px;
	border-radius: 6px;
	gap: 8px;
`;

const RightBuyDetailsFooter = styled.div`
	display: flex;
	gap: 8px;

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
`;

export {
	HomeTittle,
	HomeSubtittle,
	BenefitsContainer,
	CoffeeBanner,
	BannerContainer,
	StoreTitlle,
	CoffeListContainer,
	CoffeCard,
	CoffeeCategoryBadge,
	CoffeeCategoryContainer,
	Price,
	BuyDetailsContainer,
	PlusIcon,
	MinusIcon,
	Counter,
	RightBuyDetailsFooter,
	StoreContainer,
};
