import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTeheme } from './styles/themes/default';

export const App = () => {
	return (
		<ThemeProvider theme={defaultTeheme}>
			<div>oi</div>
			<GlobalStyle />
		</ThemeProvider>
	);
};
