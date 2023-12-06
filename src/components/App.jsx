import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import AdvertsCars from './AdvertsCars/AdvertsCars';
import FavoritesCars from './FavoritesCars/FavoritesCars';

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='catalog' element={<AdvertsCars />} />
				<Route path='favorites' element={<FavoritesCars />} />
			</Route>
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};
