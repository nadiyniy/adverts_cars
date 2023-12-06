import styled from 'styled-components';

export const Div = styled.div`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 10px;

	@media (width >= 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 20px;
	}
	@media (width >= 1024px) {
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 30px;
	}
`;
