import React from 'react';
import { Link } from 'react-router-dom';
import { Div } from './Home.styled';

const Home = () => {
	return (
		<Div>
			<div className='home-background'></div>
			<div className='home-content'>
				<h1 className='home-title'>Welcome to RentCar</h1>
				<h2 className='home-subtitle'>Your Gateway to Exciting Journeys</h2>
				<p className='home-par'>
					Welcome to RentCar, where every journey is an adventure waiting to happen! We are delighted to be your trusted
					partner in exploring the roads with comfort, style, and ease.
				</p>
				<h2 className='home-subtitle'>Discover Our Fleet</h2>
				<p className='home-par'>
					Our diverse fleet of vehicles is tailored to meet your unique travel needs. From sleek sedans to spacious SUVs
					and stylish convertibles, we have the perfect ride for every occasion. Whether it's a family vacation, a
					business trip, or a weekend getaway, find the ideal vehicle that suits your taste and requirements.
				</p>
				<Link className='home-link' to='catalog'>
					Go rent
				</Link>
			</div>
		</Div>
	);
};

export default Home;
