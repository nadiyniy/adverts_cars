import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertsCars } from '../../redux/cars/selectros';
import { fetchCarsThunk } from '../../redux/cars/operations';
import CardList from '../CardList/CardList';

const AdvertsCars = () => {
	const cars = useSelector(selectAdvertsCars);
	const dispatch = useDispatch();

	useEffect(() => {
		const data = {
			page: 1,
			limit: 12,
		};
		dispatch(fetchCarsThunk(data));
	}, [dispatch]);

	return (
		<>
			{!cars?.length ? <p>no card list</p> : <CardList items={cars} />}
			<button>load more</button>
		</>
	);
};

export default AdvertsCars;
