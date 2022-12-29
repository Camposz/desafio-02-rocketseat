import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/appLayout';
import Home from './pages/home';

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<AppLayout />}>
				<Route path='/' element={<Home />} />
			</Route>
		</Routes>
	);
};
