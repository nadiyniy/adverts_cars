import React from 'react';
import { CloseIcon } from '../svgs';
import { Div } from './CarCardInformation.styled';

const CarCardInformation = ({
	img,
	make,
	model,
	year,
	address,
	id,
	type,
	fuelConsumption,
	engineSize,
	description,
	accessories,
	functionalities,
	rentalConditions,
	mileage,
	rentalPrice,
	closeModal,
}) => {
	return (
		<Div>
			<div className='card-container-img'>
				<button className='modal-close-btn' onClick={() => closeModal(false)}>
					<CloseIcon />
				</button>
			</div>
			<img className='info-image' src={img} alt={make} width={460} height={280} />
			<div className='cart-container-title'>
				<h3 className='card-title'>
					{make}
					<span className='card-title-model'> {model}</span>, {year}
				</h3>
				<h3>{rentalPrice}</h3>
			</div>
			<ul className='card-list'>
				<li className='card-list-item'>{address}</li>
				<li className='card-list-item'>id: {id}</li>
				<li className='card-list-item'>Year: {year}</li>
				<li className='card-list-item'>Type: {type}</li>
				<li className='card-list-item'>Fuel Consumption: {fuelConsumption}</li>
				<li className='card-list-item'>Engine Size: {engineSize}</li>
			</ul>
			<p className='card-description'>{description}</p>
			<h4 className='card-subtitle'>Accessories and functionalities:</h4>
			<ul className='card-list second'>
				{accessories.map((item) => (
					<li className='card-list-item' key={item}>
						{item}
					</li>
				))}
			</ul>
			<ul className='card-list'>
				{functionalities.map((item) => (
					<li className='card-list-item' key={item}>
						{item}
					</li>
				))}
			</ul>
			<h4 className='card-subtitle'>Rental Conditions: </h4>
			<ul className='info-list'>
				<li className='info-list-item'>{rentalConditions}</li>
				<li className='info-list-item'>
					Mileage: <span className='card-title-model'>{mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
				</li>
				<li className='info-list-item'>
					Price: <span className='card-title-model'>{rentalPrice}</span>
				</li>
			</ul>
			<a className='card-more-btn' href='tel:+380730000000'>
				Rental car
			</a>
		</Div>
	);
};

export default CarCardInformation;
