import styled from 'styled-components';

export const HeaderStyled = styled.header`
	background-color: rgba(112, 112, 112, 0.5);
	border-bottom: 2px solid black;
	margin-bottom: 10px;
	.header-wrapper {
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.link-logo {
	}
	.header-logo {
		min-width: 110px;
		max-width: 200px;
		width: 100%;
		z-index: 1;
		transition: all 0.3s ease-in-out;

		/* @keyframes wiggle {
			0% {
				transform: translateX(0);
			}
			25% {
				transform: rotateZ(1deg);
			}
			50% {
				transform: translateX(0);
			}
			75% {
				transform: rotateZ(-1deg);
			}
			100% {
				transform: translateX(0);
			}
		} */
		&:hover {
			animation: wiggle 0.5s ease infinite;
		}
	}
	.header-nav {
		display: flex;
		gap: 10px;
		height: 100%;
		align-items: center;
		@media (width >= 768px) {
			gap: 20px;
		}
	}
	.header-link {
		display: flex;
		align-items: center;
		height: 100%;
		text-decoration: none;
		color: black;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease-in-out;

		&:hover {
			color: #2c2c2c;
		}
		@media (width >=768px) {
			font-size: 24px;
		}
	}
	.active {
		color: white;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			bottom: -2px;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: white;
			box-shadow: #707070;
			transition: all 0.3s ease-in-out;
		}
		&:hover {
			color: white;
		}
	}
`;
