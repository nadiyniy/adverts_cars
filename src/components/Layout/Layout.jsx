import React, { Suspense, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { Container } from '../../styles/Commons.styled'
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner'
import { createClient } from 'contentful'

export const fetchCarWashing = async () => {
	const credentials = {
		space: process.env.REACT_APP_CONTENTFUL_SPACE_ID1,
		accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN2,
	}
	const client = createClient(credentials)

	return await client.getEntries({ content_type: 'carWashingCoordinate' })
}

const Layout = () => {
	const [сarWashing, setCarWashing] = useState()
    console.log(process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN);

	useEffect(() => {
		fetchCarWashing().then(res => setCarWashing(res))
	}, [])
	console.log(сarWashing)
	return (
		<>
			<Header />
			<Container>
				<Suspense fallback={<LoaderSpinner />}>
					<Outlet />
				</Suspense>
			</Container>
		</>
	)
}

export default Layout
