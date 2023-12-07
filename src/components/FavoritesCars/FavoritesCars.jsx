import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/cars/selectros';
import CardList from '../CardList/CardList';
import AdvertsForm from '../AdvertsForm/AdvertsForm';

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

const priceOptions = [
	{ label: 'Any Price', value: '' },
	{ label: '$0 - $10', value: '0-10' },
	{ label: '$10 - $20', value: '10-20' },
	{ label: '$20 - $30', value: '20-30' },
	{ label: '$30 - $40', value: '30-40' },
	{ label: '$40 - $50', value: '40-50' },
	{ label: '$50 - $60', value: '50-60' },
	{ label: '$60 - $70', value: '60-70' },
	{ label: '$70 - $80', value: '70-80' },
];

const FavoritesCars = () => {
	const favorites = useSelector(selectFavorites);
	const [visibleItems, setVisibleItems] = useState(12);
	const [selectedMake, setSelectedMake] = useState('');
	const [minMileage, setMinMileage] = useState('');
	const [maxMileage, setMaxMileage] = useState('');
	const [selectedPriceRange, setSelectedPriceRange] = useState('');
	const [searching, setSearching] = useState(false);

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

	const handlePriceRangeChange = (event) => {
		setSelectedPriceRange(event.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearching(true);
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

	const filterByPrice = (car) => {
		const numericValue = parseFloat(car.rentalPrice.replace(/[^\d.]/g, ''));

		if (!selectedPriceRange) {
			return true;
		}

		const [min, max] = selectedPriceRange.split('-');
		return numericValue >= Number(min) && numericValue <= Number(max);
	};

	const filteredCars = favorites.filter(filterByMake).filter(filterByMileage).filter(filterByPrice);

	return (
		<>
			<AdvertsForm
				selectedMake={selectedMake}
				selectedPriceRange={selectedPriceRange}
				minMileage={minMileage}
				maxMileage={maxMileage}
				makes={makes}
				priceOptions={priceOptions}
				onMakeChange={handleMakeChange}
				onPriceRangeChange={handlePriceRangeChange}
				onMinMileageChange={handleMinMileageChange}
				onMaxMileageChange={handleMaxMileageChange}
				onSubmit={handleSubmit}
			/>
			{searching && filteredCars.length === 0 ? <p>No matching cars found</p> : <CardList items={filteredCars} />}
			{favorites.length > visibleItems && <button onClick={handleLoadMore}>Load more</button>}
		</>
	);
};

export default FavoritesCars;
