import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { useContext } from 'react';
import Counter from '../../components/counter';
import RemoveItemButton from '../../components/removeItemButton';
import { CartContext, coffeeListTypes } from '../../contexts/CartContext';
import { defaultTeheme } from '../../styles/themes/default';
import {
	Bairro,
	CardLeftContainer,
	CardResumeContainer,
	CardTittle,
	CardTittleContainer,
	Cep,
	CheckoutCartItemContainer,
	CheckoutCartItemTittle,
	CheckoutContainer,
	CheckoutLeftContainer,
	Cidade,
	Complemento,
	ConfirmButton,
	CounterAndRemoveContainer,
	EmptyCartText,
	FormContainer,
	Numero,
	PriceText,
	ResumeContainer,
	ResumeItenContainer,
	ResumeItenPrice,
	ResumeItenTittle,
	ResumeTotalText,
	Rua,
	SelectedCoffeeList,
	Uf,
	PaymentContainer,
	PaymentButtonsContainer,
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
			<div>
				<CardTittle>Complete seu pedido</CardTittle>
				<CardLeftContainer>
					<CardTittleContainer>
						<MapPinLine size={25} weight='regular' color={defaultTeheme.yellowDark} />
						<div>
							<CheckoutCartItemTittle>Endereço de entrega</CheckoutCartItemTittle>
							<ResumeItenTittle>
								Informe o endereço onde deseja receber o seu pedido
							</ResumeItenTittle>
						</div>
					</CardTittleContainer>
					<FormContainer>
						<Cep placeholder='CEP' />
						<Rua placeholder='Rua' />
						<div>
							<Numero placeholder='Número' />
							<Complemento placeholder='Complemento' />
						</div>
						<div>
							<Bairro placeholder='Bairro' />
							<Cidade placeholder='Cidade' />
							<Uf placeholder='UF' />
						</div>
					</FormContainer>
				</CardLeftContainer>
				<PaymentContainer>
					<CardTittleContainer>
						<CurrencyDollar size={25} weight='regular' color={defaultTeheme.purple} />
						<div>
							<CheckoutCartItemTittle>Pagamento</CheckoutCartItemTittle>
							<ResumeItenTittle>
								O pagamento é feito na entrega. Escolha a forma que deseja pagar
							</ResumeItenTittle>
						</div>
					</CardTittleContainer>
					<PaymentButtonsContainer>
						<button>
							<CreditCard size={20} weight='regular' color={defaultTeheme.purple} />{' '}
							CARTÃO DE CRÉDITO
						</button>
						<button>
							<Bank size={20} weight='regular' color={defaultTeheme.purple} /> CARTÃO
							DE DÉBITO
						</button>
						<button>
							<Money size={20} weight='regular' color={defaultTeheme.purple} />{' '}
							DINHEIRO
						</button>
					</PaymentButtonsContainer>
				</PaymentContainer>
			</div>
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
									<ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
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
