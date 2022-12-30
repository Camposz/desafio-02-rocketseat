import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTeheme } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

export const App = () => {
	return (
		<ThemeProvider theme={defaultTeheme}>
			<BrowserRouter>
				<CartProvider>
					<Router />
				</CartProvider>
				<GlobalStyle />
			</BrowserRouter>
		</ThemeProvider>
	);
};
