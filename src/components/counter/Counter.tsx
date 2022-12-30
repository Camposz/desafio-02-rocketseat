import { coffeeListTypes } from '../../contexts/CartContext';
import { MinusIcon, CounterContainer, PlusIcon } from './styles';

interface CounterProps {
	coffee: coffeeListTypes;
	addCoffeeQuantity: (coffee: coffeeListTypes) => void;
	subtractCoffeeQuantity: (coffee: coffeeListTypes) => void;
}

export const Counter = ({ addCoffeeQuantity, subtractCoffeeQuantity, coffee }: CounterProps) => {
	return (
		<CounterContainer>
			<button onClick={() => subtractCoffeeQuantity(coffee)}>
				<MinusIcon />
			</button>
			{coffee.quantity}
			<button onClick={() => addCoffeeQuantity(coffee)}>
				<PlusIcon />
			</button>
		</CounterContainer>
	);
};
