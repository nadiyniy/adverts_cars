import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Container } from '../../styles/Commons.styled';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const Layout = () => {
	return (
		<>
			<Header />
			<Container>
				<Suspense fallback={<LoaderSpinner />}>
					<Outlet />
				</Suspense>
			</Container>
		</>
	);
};

export default Layout;
