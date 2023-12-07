import styled from 'styled-components';
import WelcomeImage from '../../images/welcome-image.jpeg';

export const Div = styled.div`
	height: calc(90dvh - 80px);
	display: grid;
	gap: 20px;
	align-items: center;
	@media (width>=768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	.home-background {
		width: 100%;
		height: 100%;

		@media (width>=768px) {
			background-image: url(${WelcomeImage});
			background-size: cover;
			background-repeat: no-repeat;
		}
	}
	.home-content {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.home-title {
		font-size: 40px;
		text-align: center;
	}
	.home-subtitle {
		text-align: center;
	}
	.home-par {
		text-align: justify;
	}

	.home-link {
		background: none;
		border: none;
		display: block;
		margin: 0 auto;
		color: #3470ff;
		text-decoration: underline;
		margin-bottom: 150px;
		&:hover {
			color: #0b44cd;
		}
	}
`;
