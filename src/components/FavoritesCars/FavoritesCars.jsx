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
	'Mercedes-Benz',
	'Chrysler',
	'Kia',
	'Land',
];
const FavoritesCars = () => {
	const favorites = useSelector(selectFavorites);
	const [visibleItems, setVisibleItems] = useState(12);
	const visibleFavorites = favorites.slice(0, visibleItems);
	const [selectedMake, setSelectedMake] = useState('');

	const handleLoadMore = () => {
		setVisibleItems((prevVisibleItems) => prevVisibleItems + 12);
	};

	const handleMakeChange = (event) => {
		setSelectedMake(event.target.value);
	};

	const filteredCars = selectedMake ? visibleFavorites.filter((car) => car.make === selectedMake) : favorites;

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
			{favorites.length > visibleItems && <button onClick={handleLoadMore}>Load more</button>}
		</>
	);
};

export default FavoritesCars;
