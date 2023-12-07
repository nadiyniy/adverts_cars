import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/cars/selectros';
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
	'Chrysler',
	'Kia',
	'Land',
];
const FavoritesCars = () => {
	const favorites = useSelector(selectFavorites);
	const [visibleItems, setVisibleItems] = useState(12);
	const visibleFavorites = favorites.slice(0, visibleItems);
	const [selectedMake, setSelectedMake] = useState('');
	const [minMileage, setMinMileage] = useState('');
	const [maxMileage, setMaxMileage] = useState('');

	const handleLoadMore = () => {
		setVisibleItems((prevVisibleItems) => prevVisibleItems + 12);
	};

	const handleMakeChange = (event) => {
		setSelectedMake(event.target.value);
	};
	const handleMinMileageChange = (event) => {
		setMinMileage(event.target.value);
	};

	const handleMaxMileageChange = (event) => {
		setMaxMileage(event.target.value);
	};
	const filterByMake = (car) => {
		return !selectedMake || car.make === selectedMake;
	};

	const filterByMileage = (car) => {
		const mileage = car.mileage;

		if (minMileage && !/^\d+$/.test(minMileage)) {
			return false;
		}

		if (maxMileage && !/^\d+$/.test(maxMileage)) {
			return false;
		}

		if (minMileage && mileage < Number(minMileage)) {
			return false;
		}

		if (maxMileage && mileage > Number(maxMileage)) {
			return false;
		}

		return true;
	};

	const filteredCars = visibleFavorites.filter(filterByMake).filter(filterByMileage);

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
				<div>
					<label>Min Mileage:</label>
					<input type='text' value={minMileage} onChange={handleMinMileageChange} />
				</div>
				<div>
					<label>Max Mileage:</label>
					<input type='text' value={maxMileage} onChange={handleMaxMileageChange} />
				</div>
			</div>
			{!filteredCars?.length ? <p>No matching cars found</p> : <CardList items={filteredCars} />}
			{favorites.length > visibleItems && <button onClick={handleLoadMore}>Load more</button>}
		</>
	);
};

export default FavoritesCars;
