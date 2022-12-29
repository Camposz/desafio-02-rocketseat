import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTeheme } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
	return (
		<ThemeProvider theme={defaultTeheme}>
			<BrowserRouter>
				<Router />
				<GlobalStyle />
			</BrowserRouter>
		</ThemeProvider>
	);
};
