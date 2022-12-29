import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import { AppContainer } from './styles';

export const AppLayout = () => {
	return (
		<AppContainer>
			<Header />
			<Outlet />
		</AppContainer>
	);
};
