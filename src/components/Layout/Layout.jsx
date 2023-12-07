import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Container } from '../../styles/Commons.styled';

const Layout = () => {
	return (
		<>
			<Header />
			<Container>
				<Suspense fallback={<p>Loading...</p>}>
					<Outlet />
				</Suspense>
			</Container>
		</>
	);
};

export default Layout;
