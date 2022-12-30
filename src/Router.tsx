import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/appLayout';
import Checkout from './pages/checkout';
import Home from './pages/home';

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<AppLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};
