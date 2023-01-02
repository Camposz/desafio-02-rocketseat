import { createContext, useState } from 'react';

export interface coffeeListTypes {
	id: number;
	img: string;
	categories: string[];
	tittle: string;
	description: string;
	price: number;
	quantity: number;
}

interface CartContextTypes {
	coffeeList: coffeeListTypes[] | [];
	setCoffeeListHandler: (coffee: coffeeListTypes) => void;
	addCoffeeQuantity: (coffee: coffeeListTypes) => void;
	subtractCoffeeQuantity: (coffee: coffeeListTypes) => void;
	removeCoffeeHandler: (coffee: coffeeListTypes) => void;
}

export const CartContext = createContext({} as CartContextTypes);

interface CartProviderProps {
	children: JSX.Element;
}

export const CartProvider = ({ children }: CartProviderProps) => {
	const [coffeeList, setCoffeeList] = useState<coffeeListTypes[] | []>([]);

	const removeCoffeeHandler = (coffee: coffeeListTypes) => {
		const updatedCoffeeList = coffeeList.filter((c) => c.id !== coffee.id);

		setCoffeeList(updatedCoffeeList);
	};

	const setCoffeeListHandler = (coffee: coffeeListTypes) => {
		let foundCoffeeId = false;
		const updatedCoffeeList = coffeeList.map((c) => {
			if (c.id === coffee.id) {
				foundCoffeeId = true;
				return { ...c, quantity: (c.quantity += coffee.quantity) };
			}

			return c;
		});

		if (!foundCoffeeId) {
			updatedCoffeeList.push(coffee);
		}

		setCoffeeList(updatedCoffeeList);
	};

	const addCoffeeQuantity = (coffee: coffeeListTypes) => {
		const updatedCoffeeList = coffeeList.map((c) => {
			if (c.id === coffee.id) {
				return { ...c, quantity: c.quantity + 1 };
			}

			return c;
		});

		setCoffeeList(updatedCoffeeList);
	};

	const subtractCoffeeQuantity = (coffee: coffeeListTypes) => {
		const updatedCoffeeList = coffeeList.map((c) => {
			if (c.id === coffee.id && c.quantity > 1) {
				return { ...c, quantity: c.quantity - 1 };
			}

			return c;
		});

		setCoffeeList(updatedCoffeeList);
	};

	return (
		<CartContext.Provider
			value={{
				coffeeList,
				setCoffeeListHandler,
				addCoffeeQuantity,
				subtractCoffeeQuantity,
				removeCoffeeHandler,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
