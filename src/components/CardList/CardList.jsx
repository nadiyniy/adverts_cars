import React from 'react';
import Card from '../Card/Card';
import { Div } from './Cardlist.styled';

const CardList = ({ items }) => {
	return (
		<Div>
			{items?.map((car) => (
				<Card key={car.id} {...car} />
			))}
		</Div>
	);
};

export default CardList;
