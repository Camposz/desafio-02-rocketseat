import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import BenefitsBadge from '../../components/benefitsBadge';
import { defaultTeheme } from '../../styles/themes/default';
import {
	BenefitsContainer,
	CoffeeBanner,
	HomeContainer,
	HomeSubtittle,
	HomeTittle,
} from './styles';

const Iconsize = 20;
const IconWeight = 'fill';
const IconColor = 'white';

const BenefitsData = [
	{
		icon: <ShoppingCart size={Iconsize} weight={IconWeight} color={IconColor} />,
		BadgeColor: defaultTeheme.yellowDark,
		text: 'Compra simples segura',
	},
	{
		icon: <Package size={Iconsize} weight={IconWeight} color={IconColor} />,
		BadgeColor: defaultTeheme.text,
		text: 'Embalagem mantém o café intacto',
	},
	{
		icon: <Timer size={Iconsize} weight={IconWeight} color={IconColor} />,
		BadgeColor: defaultTeheme.yellow,
		text: 'Entrega rápida e rastreada',
	},
	{
		icon: <Coffee size={Iconsize} weight={IconWeight} color={IconColor} />,
		BadgeColor: defaultTeheme.purple,
		text: 'O café chega fresquinho',
	},
];

export const Home = () => {
	return (
		<HomeContainer>
			<div>
				<HomeTittle>Econtre o café perfeito</HomeTittle>
				<HomeTittle>para qualquer hora do dia</HomeTittle>
				<HomeSubtittle>
					Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
				</HomeSubtittle>

				<BenefitsContainer>
					{BenefitsData.map((benefit, index) => (
						<p key={index}>
							{' '}
							<BenefitsBadge icon={benefit.icon} color={benefit.BadgeColor} />
							{benefit.text}
						</p>
					))}
				</BenefitsContainer>
			</div>
			<div>
				<CoffeeBanner />
			</div>
		</HomeContainer>
	);
};
