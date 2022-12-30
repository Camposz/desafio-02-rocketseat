import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useContext, useState } from 'react';
import {
	Americano,
	Expresso,
	Arabe,
	CafeComLeite,
	CafeGelado,
	Capuccino,
	ChocolateQuente,
	Cubano,
	ExpressoCremoso,
	Havaiano,
	Irlandes,
	Latte,
	Macchiato,
	Mochaccino,
} from '../../assets/images';
import BenefitsBadge from '../../components/benefitsBadge';
import CartButton from '../../components/cartButton';
import Counter from '../../components/counter';
import { CartContext, coffeeListTypes } from '../../contexts/CartContext';
import { defaultTeheme } from '../../styles/themes/default';
import {
	BannerContainer,
	BenefitsContainer,
	BuyDetailsContainer,
	CoffeCard,
	CoffeeBanner,
	CoffeeCategoryBadge,
	CoffeeCategoryContainer,
	CoffeListContainer,
	HomeSubtittle,
	HomeTittle,
	Price,
	RightBuyDetailsFooter,
	StoreContainer,
	StoreTitlle,
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

const CoffeList = [
	{
		id: 1,
		img: Expresso,
		categories: ['TRADICIONAL'],
		tittle: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		price: 9.9,
		quantity: 1,
	},
	{
		id: 2,
		img: Americano,
		categories: ['TRADICIONAL'],
		tittle: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		price: 9.9,
		quantity: 1,
	},
	{
		id: 3,
		img: ExpressoCremoso,
		categories: ['TRADICIONAL'],
		tittle: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		price: 9.9,
		quantity: 1,
	},
	{
		id: 4,
		img: CafeGelado,
		categories: ['TRADICIONAL', 'GELADO'],
		tittle: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		price: 9.9,
		quantity: 1,
	},
	{
		id: 5,
		img: CafeComLeite,
		categories: ['TRADICIONAL', 'COM LEITE'],
		tittle: 'Café com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		price: 9.9,
		quantity: 1,
	},
	{
		id: 6,
		img: Latte,
		categories: ['TRADICIONAL', 'COM LEITE'],
		tittle: 'Latte',
		description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		price: 9.9,
		quantity: 1,
	},
	{
		id: 7,
		img: Capuccino,
		categories: ['TRADICIONAL', 'COM LEITE'],
		tittle: 'Capuccino',
		description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
		price: 9.9,
		quantity: 1,
	},
	{
		id: 8,
		img: Macchiato,
		categories: ['TRADICIONAL', 'COM LEITE'],
		tittle: 'Macchiato',
		description: 'Café expresso misturado com um pouco de leite quente e espuma',
		price: 9.9,
		quantity: 1,
	},
	{
		id: 9,
		img: Mochaccino,
		categories: ['TRADICIONAL', 'COM LEITE'],
		tittle: 'Mochaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		price: 9.9,
		quantity: 1,
	},
	{
		id: 10,
		img: ChocolateQuente,
		categories: ['ESPECIAL', 'COM LEITE'],
		tittle: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		price: 9.9,
		quantity: 1,
	},
	{
		id: 11,
		img: Cubano,
		categories: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
		tittle: 'Cubano',
		description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
		price: 9.9,
		quantity: 1,
	},
	{
		id: 12,
		img: Havaiano,
		categories: ['ESPECIAL'],
		tittle: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		price: 9.9,
		quantity: 1,
	},
	{
		id: 13,
		img: Arabe,
		categories: ['ESPECIAL'],
		tittle: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		price: 9.9,
		quantity: 1,
	},
	{
		id: 14,
		img: Irlandes,
		categories: ['ESPECIAL'],
		tittle: 'Irlandês',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		price: 9.9,
		quantity: 1,
	},
];

export const Home = () => {
	const { coffeeList, setCoffeeListHandler } = useContext(CartContext);
	const [allCoffees, setAllCoffes] = useState<coffeeListTypes[]>(CoffeList);

	const addCoffeeQuantity = (coffee: coffeeListTypes) => {
		const updatedCoffeeList = allCoffees.map((c) => {
			if (c.id === coffee.id) {
				return { ...c, quantity: c.quantity + 1 };
			}

			return c;
		});

		setAllCoffes(updatedCoffeeList);
	};

	const subtractCoffeeQuantity = (coffee: coffeeListTypes) => {
		const updatedCoffeeList = allCoffees.map((c) => {
			if (c.id === coffee.id && c.quantity > 1) {
				return { ...c, quantity: c.quantity - 1 };
			}

			return c;
		});

		setAllCoffes(updatedCoffeeList);
	};

	return (
		<div>
			<BannerContainer>
				<div>
					<HomeTittle>Econtre o café perfeito</HomeTittle>
					<HomeTittle>para qualquer hora do dia</HomeTittle>
					<HomeSubtittle>
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
					</HomeSubtittle>

					<BenefitsContainer>
						{BenefitsData.map((benefit, index) => (
							<a key={index}>
								<BenefitsBadge icon={benefit.icon} color={benefit.BadgeColor} />
								{benefit.text}
							</a>
						))}
					</BenefitsContainer>
				</div>

				<CoffeeBanner />
			</BannerContainer>

			<StoreContainer>
				<StoreTitlle>Nossos Cafés</StoreTitlle>

				<CoffeListContainer>
					{allCoffees.map((coffee, index) => (
						<CoffeCard key={index}>
							<img src={coffee.img} />

							<CoffeeCategoryContainer>
								{coffee.categories.map((category, index) => (
									<CoffeeCategoryBadge key={index}>
										{category}
									</CoffeeCategoryBadge>
								))}
							</CoffeeCategoryContainer>

							<h1>{coffee.tittle}</h1>
							<h2>{coffee.description}</h2>

							<BuyDetailsContainer>
								<span>
									R$ <Price>{coffee.price.toFixed(2)}</Price>
								</span>

								<RightBuyDetailsFooter>
									<Counter
										coffee={coffee}
										addCoffeeQuantity={addCoffeeQuantity}
										subtractCoffeeQuantity={subtractCoffeeQuantity}
									/>

									<CartButton
										onClick={() => setCoffeeListHandler(coffee)}
										hover={defaultTeheme.purple}
										background={defaultTeheme.purpleDark}
										color={defaultTeheme.white}
									/>
								</RightBuyDetailsFooter>
							</BuyDetailsContainer>
						</CoffeCard>
					))}
				</CoffeListContainer>
			</StoreContainer>
		</div>
	);
};
