import styled from 'styled-components';

import BackgroundBlur from '../../assets/background.svg';
import CoffeImage from '../../assets/images/coffeeImage.png';

const HomeContainer = styled.div`
	background-image: url(${BackgroundBlur});
	background-size: 100vw;
	background-position: 50% 50%;
	margin: 0 -11vw;
	padding: 12vh 11vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HomeTittle = styled.h1`
	font-family: 'Baloo 2';
	font-weight: 900;
	font-size: clamp(2rem, 3.8vw, 4rem);
	color: ${({ theme }) => theme.title};
`;

const HomeSubtittle = styled.h1`
	font-size: clamp(1rem, 2vw, 1.25rem);

	color: ${({ theme }) => theme.subtitle};
`;

const BenefitsContainer = styled.div`
	margin-top: 66px;
	display: grid;
	gap: 20px;
	grid-template-columns: 1fr 1fr;

	p {
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

export { HomeContainer, HomeTittle, HomeSubtittle, BenefitsContainer, CoffeeBanner };
