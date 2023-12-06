import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Container } from '../../styles/Commons.styled';

const Layout = () => {
	return (
		<Container>
			<Header />
			<Suspense fallback={<p>Loading...</p>}>
				<Outlet />
			</Suspense>
		</Container>
	);
};

export default Layout;
