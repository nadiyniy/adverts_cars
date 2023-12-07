import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertsCars } from '../../redux/cars/selectros';
import { fetchCarsThunk } from '../../redux/cars/operations';
import CardList from '../CardList/CardList';

const makes = [
	'Buick',
	'Volvo',
	'HUMMER',
	'Subaru',
	'Mitsubishi',
	'Nissan',
	'Lincoln',
	'GMC',
	'Hyundai',
	'MINI',
	'Bentley',
	'Mercedes-Benz',
	'Aston Martin',
	'Pontiac',
	'Lamborghini',
	'Audi',
	'BMW',
	'Chevrolet',
	'Mercedes-Benz',
	'Chrysler',
	'Kia',
	'Land',
];

const AdvertsCars = () => {
	const allCars = useSelector(selectAdvertsCars);
	const dispatch = useDispatch();
	const [displayedCars, setDisplayedCars] = useState(12);
	const [selectedMake, setSelectedMake] = useState('');

	useEffect(() => {
		const data = {
			page: 1,
			limit: displayedCars,
		};
		dispatch(fetchCarsThunk(data));
	}, [dispatch, displayedCars]);

	const loadMore = () => {
		setDisplayedCars((prevDisplayedCars) => prevDisplayedCars + 12);
	};
	const handleMakeChange = (event) => {
		setSelectedMake(event.target.value);
	};

	const filteredCars = selectedMake ? allCars.filter((car) => car.make === selectedMake) : allCars;

	return (
		<>
			<div>
				<select onChange={handleMakeChange} value={selectedMake}>
					<option value=''>All Makes</option>
					{makes.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>
			{!filteredCars?.length ? <p>No matching cars found</p> : <CardList items={filteredCars} />}
			{displayedCars <= 32 && <button onClick={loadMore}>load more</button>}
		</>
	);
};

export default AdvertsCars;
