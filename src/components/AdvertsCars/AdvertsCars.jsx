import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertsCars } from '../../redux/cars/selectros';
import { fetchCarsThunk } from '../../redux/cars/operations';
import CardList from '../CardList/CardList';
import { AdvertsCarsStyled } from './AdvertsCars.styled';
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

const AdvertsCars = () => {
	const allCars = useSelector(selectAdvertsCars);
	const dispatch = useDispatch();
	const [displayedCars, setDisplayedCars] = useState(12);
	const [selectedMake, setSelectedMake] = useState('');
	const [selectedPriceRange, setSelectedPriceRange] = useState('');
	const [minMileage, setMinMileage] = useState('');
	const [maxMileage, setMaxMileage] = useState('');
	const [searchedCars, setSearchedCars] = useState([]);
	const [searching, setSearching] = useState(false);

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
	const handlePriceRangeChange = (event) => {
		const selectedValue = event.target.value;
		setSelectedPriceRange(selectedValue);
	};

	const filterCars = (car) => {
		const numericValue = parseFloat(car.rentalPrice.replace(/[^\d.]/g, ''));

		if (!selectedPriceRange) {
			return true;
		}

		const [min, max] = selectedPriceRange.split('-');
		return numericValue >= Number(min) && numericValue <= Number(max);
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

	const handleMinMileageChange = (event) => {
		setMinMileage(event.target.value);
	};

	const handleMaxMileageChange = (event) => {
		setMaxMileage(event.target.value);
	};

	const handleSearch = () => {
		const filtered = allCars
			.filter((car) => !selectedMake || car.make === selectedMake)
			.filter(filterCars)
			.filter(filterByMileage);

		setSearchedCars(filtered);
		setSearching(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch();
	};

	return (
		<AdvertsCarsStyled>
			{/* <form className='adverts-form' onSubmit={handleSubmit}>
				<label className='adverts-label'>
					Car brand
					<select className='adverts-select' onChange={handleMakeChange} value={selectedMake}>
						<option value=''>All Makes</option>
						{makes.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>
				</label>
				<label className='adverts-label'>
					Price/ 1 hour
					<select className='adverts-select' onChange={handlePriceRangeChange} value={selectedPriceRange}>
						{priceOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</label>

				<label className='adverts-label mileage'>
					Сar mileage / km
					<div className='container-input'>
						<input
							className='adverts-input'
							placeholder='from'
							type='text'
							value={minMileage}
							onChange={handleMinMileageChange}
						/>
						<input
							className='adverts-input'
							placeholder='to'
							type='text'
							value={maxMileage}
							onChange={handleMaxMileageChange}
						/>
					</div>
				</label>
				<button className='search-btn'>search</button>
			</form> */}
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
			{searching && !searchedCars.length ? (
				<p>No matching cars found</p>
			) : (
				<CardList items={searchedCars.length ? searchedCars : allCars} />
			)}
			{displayedCars <= 32 && (
				<button className='load-more-btn' onClick={loadMore}>
					load more
				</button>
			)}
		</AdvertsCarsStyled>
	);
};

export default AdvertsCars;
