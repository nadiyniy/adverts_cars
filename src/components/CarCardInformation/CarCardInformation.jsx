import React from 'react';
import { CloseIcon } from '../svgs';

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
		<div style={{ background: 'white', width: '400px' }}>
			<button onClick={() => closeModal(false)}>
				<CloseIcon />
			</button>
			<img src={img} alt={make} />
			<h3>
				{make}
				<span>{model}</span>,{year}
			</h3>
			<ul>
				<li>{address}</li>
				<li>id: {id}</li>
				<li>Year: {year}</li>
				<li>Type: {type}</li>
				<li>Fuel Consumption: {fuelConsumption}</li>
				<li>Engine Size: {engineSize}</li>
			</ul>
			<p>{description}</p>
			<h4>Accessories and functionalities:</h4>
			<ul>
				{accessories.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<ul>
				{functionalities.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<h4>Rental Conditions: </h4>
			<ul>
				<li>{rentalConditions}</li>
				<li>{mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</li>
				<li>{rentalPrice}</li>
			</ul>
			<a href='tel:+380730000000'>Rental car</a>
		</div>
	);
};

export default CarCardInformation;
