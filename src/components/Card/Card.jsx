import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import CarCardInformation from '../CarCardInformation/CarCardInformation';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/cars/selectros';
import { addToFavorites, removeFromFavorites } from '../../redux/cars/slice';
import { HeartFavoriteIcon, HeartIcon } from '../svgs';
import { Div } from './Card.styled';

const Card = (props) => {
	const { img, make, model, year, rentalPrice, address, rentalCompany, type, functionalities, id } = props;
	const [isOpenLearnMore, setOpenLearnMore] = useState(false);
	const favorites = useSelector(selectFavorites);
	const dispatch = useDispatch();
	const isFavorite = favorites.some((favorite) => favorite.id === id);

	const clickLearnMore = () => {
		setOpenLearnMore(true);
	};
	const toggleFavorite = () => {
		if (isFavorite) {
			dispatch(removeFromFavorites(props));
		} else {
			dispatch(addToFavorites(props));
		}
	};

	return (
		<Div>
			<div className='card-container-img'>
				<img className='card-img' src={img} alt={make} width={273} height={273} />
				<span className='card-favorite-icon' onClick={toggleFavorite}>
					{isFavorite ? <HeartFavoriteIcon /> : <HeartIcon />}
				</span>
			</div>
			<div className='cart-container-title'>
				<h3 className='card-title'>
					{make}
					<span className='card-title-model'> {model}</span>, {year}
				</h3>
				<h3>{rentalPrice}</h3>
			</div>
			<ul className='card-list'>
				<li className='card-list-item'>{address}</li>
				<li className='card-list-item'>{rentalCompany}</li>
				<li className='card-list-item'>{type}</li>
				<li className='card-list-item'>{id}</li>
				<li className='card-list-item'>{model}</li>
				<li className='card-list-item'>{functionalities[0]}</li>
			</ul>

			<button className='card-more-btn' onClick={clickLearnMore}>
				Learn more
			</button>
			{isOpenLearnMore && (
				<Modal closeModal={() => setOpenLearnMore(false)}>
					<CarCardInformation closeModal={setOpenLearnMore} {...props} />
				</Modal>
			)}
		</Div>
	);
};

export default Card;
