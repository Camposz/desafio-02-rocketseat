import { Trash } from 'phosphor-react';
import { coffeeListTypes } from '../../contexts/CartContext';
import { defaultTeheme } from '../../styles/themes/default';
import { RemoveIconButtonContainer } from './styles';

interface RemoveItemButtonProps {
	coffee: coffeeListTypes;
	removeCoffeeHandler: (coffee: coffeeListTypes) => void;
}

const RemoveItemButton = ({ removeCoffeeHandler, coffee }: RemoveItemButtonProps) => {
	return (
		<RemoveIconButtonContainer onClick={() => removeCoffeeHandler(coffee)}>
			<Trash size={20} weight='bold' color={defaultTeheme.purple} />
			<span>REMOVER</span>
		</RemoveIconButtonContainer>
	);
};

export default RemoveItemButton;
