import React from 'react';
import { FormStyled } from './AdvertsForm.styled';

const AdvertsForm = ({
	selectedMake,
	selectedPriceRange,
	minMileage,
	maxMileage,
	makes,
	priceOptions,
	onMakeChange,
	onPriceRangeChange,
	onMinMileageChange,
	onMaxMileageChange,
	onSubmit,
}) => {
	return (
		<FormStyled className='adverts-form' onSubmit={onSubmit}>
			<label className='adverts-label'>
				Car brand
				<select className='adverts-select' onChange={onMakeChange} value={selectedMake}>
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
				<select className='adverts-select' onChange={onPriceRangeChange} value={selectedPriceRange}>
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
						onChange={onMinMileageChange}
					/>
					<input
						className='adverts-input'
						placeholder='to'
						type='text'
						value={maxMileage}
						onChange={onMaxMileageChange}
					/>
				</div>
			</label>
			<button className='search-btn'>search</button>
		</FormStyled>
	);
};

export default AdvertsForm;
