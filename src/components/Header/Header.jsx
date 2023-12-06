import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/catalog'>Catalogs</NavLink>
			<NavLink to='/favorites'>Favorites</NavLink>
		</nav>
	);
};

export default Header;
