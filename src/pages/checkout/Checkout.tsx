import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CardResumeContainer, CardTittle, CheckoutContainer, SelectedCoffeeList } from './styles';

export const Checkout = () => {
	const { coffeeList } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<CardTittle>Complete seu pedido</CardTittle>
			<div>
				<CardTittle>Cafés Selecionados</CardTittle>
				<CardResumeContainer>
					<SelectedCoffeeList>
						{coffeeList.length > 0 ? (
							coffeeList.map((coffee) => {
								return (
									<div key={coffee.id}>
										<img src={coffee.img} />
										<span>{coffee.tittle}</span>
										<span>R$ {coffee.price}</span>
										<span>{coffee.quantity}</span>
									</div>
								);
							})
						) : (
							<div>nada na lista ainda</div>
						)}
					</SelectedCoffeeList>
				</CardResumeContainer>
			</div>
		</CheckoutContainer>
	);
};
