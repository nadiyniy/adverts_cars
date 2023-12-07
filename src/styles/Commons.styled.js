import styled from 'styled-components';

export const Container = styled.div`
	max-width: 375px;
	padding: 0 10px;
	margin: 0 auto;

	@media screen and (min-width: 768px) {
		max-width: 768px;
		padding: 0 32px;
	}
	@media screen and (min-width: 1024px) {
		max-width: 1024px;
		padding: 0 128px;
	}
	@media screen and (min-width: 1440px) {
		max-width: 1440px;
	}
`;
