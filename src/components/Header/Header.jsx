import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';
import { Container } from '../../styles/Commons.styled';
import Logo from '../../images/pngwing.com.png';
import { motion } from 'framer-motion';

const Header = () => {
	return (
		<HeaderStyled>
			<Container>
				<div className='header-wrapper'>
					<Link className='link-logo' to='/'>
						<motion.img
							className='header-logo'
							src={Logo}
							alt='Logo'
							initial={{ x: 1000, opacity: 1 }}
							animate={{
								x: 0,
								opacity: 1,
								transition: { duration: 1.5 },
							}}
						/>
					</Link>
					<nav className='header-nav'>
						<NavLink className='header-link' to='/'>
							Home
						</NavLink>
						<NavLink className='header-link' to='/catalog'>
							Catalogs
						</NavLink>
						<NavLink className='header-link' to='/favorites'>
							Favorites
						</NavLink>
					</nav>
				</div>
			</Container>
		</HeaderStyled>
	);
};

export default Header;
