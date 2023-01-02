import { useContext } from 'react';
import Counter from '../../components/counter';
import RemoveItemButton from '../../components/removeItemButton';
import { CartContext, coffeeListTypes } from '../../contexts/CartContext';
import {
	CardResumeContainer,
	CardTittle,
	CheckoutCartItemContainer,
	CheckoutCartItemTittle,
	CheckoutContainer,
	CheckoutLeftContainer,
	CounterAndRemoveContainer,
	EmptyCartText,
	PriceText,
	ResumeContainer,
	ResumeItenContainer,
	ResumeItenPrice,
	ResumeItenTittle,
	ResumeTotalText,
	SelectedCoffeeList,
} from './styles';

export const Checkout = () => {
	const { coffeeList, addCoffeeQuantity, subtractCoffeeQuantity, removeCoffeeHandler } =
		useContext(CartContext);

	//não consegui tipar o reduce
	const totalWithoutDelivery = coffeeList.reduce(
		(total: number, coffee: coffeeListTypes) => total + coffee.price * coffee.quantity,
		0
	);

	const DeliveryFee = 3.5;

	const totalWithDelivery = totalWithoutDelivery + DeliveryFee;

	return (
		<CheckoutContainer>
			<CardTittle>Complete seu pedido</CardTittle>
			<div>
				<CardTittle>Cafés Selecionados</CardTittle>
				<CardResumeContainer>
					<SelectedCoffeeList>
						{coffeeList.length > 0 ? (
							<>
								{coffeeList.map((coffee) => {
									return (
										<CheckoutCartItemContainer key={coffee.id}>
											<CheckoutLeftContainer>
												<img src={coffee.img} />
												<div>
													<CheckoutCartItemTittle>
														{coffee.tittle}
													</CheckoutCartItemTittle>
													<CounterAndRemoveContainer>
														<Counter
															coffee={coffee}
															addCoffeeQuantity={addCoffeeQuantity}
															subtractCoffeeQuantity={
																subtractCoffeeQuantity
															}
														/>
														<RemoveItemButton
															coffee={coffee}
															removeCoffeeHandler={
																removeCoffeeHandler
															}
														/>
													</CounterAndRemoveContainer>
												</div>
											</CheckoutLeftContainer>
											<PriceText>R$ {coffee.price.toFixed(2)}</PriceText>
										</CheckoutCartItemContainer>
									);
								})}
								<ResumeContainer>
									<ResumeItenContainer>
										<ResumeItenTittle>Total de itens</ResumeItenTittle>
										<ResumeItenPrice>
											R$ {totalWithoutDelivery.toFixed(2)}
										</ResumeItenPrice>
									</ResumeItenContainer>
									<ResumeItenContainer>
										<ResumeItenTittle>Entrega</ResumeItenTittle>
										<ResumeItenPrice>
											R$ {DeliveryFee.toFixed(2)}
										</ResumeItenPrice>
									</ResumeItenContainer>
									<ResumeItenContainer>
										<ResumeTotalText>Total</ResumeTotalText>
										<ResumeTotalText>
											R$ {totalWithDelivery.toFixed(2)}
										</ResumeTotalText>
									</ResumeItenContainer>
								</ResumeContainer>
							</>
						) : (
							<EmptyCartText>Nada na lista ainda</EmptyCartText>
						)}
					</SelectedCoffeeList>
				</CardResumeContainer>
			</div>
		</CheckoutContainer>
	);
};
