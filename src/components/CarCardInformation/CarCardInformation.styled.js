import styled from 'styled-components';

export const Div = styled.div`
	background-color: white;
	max-width: 540px;
	padding: 40px;
	position: relative;
	.card-container-img {
	}
	.modal-close-btn {
		position: absolute;
		top: 16px;
		right: 16px;
		background-color: transparent;
		border: none;
	}
	.info-image {
		object-fit: cover;

		border-radius: 14px;
		background: linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%), #f3f3f2;
	}
	.cart-container-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
	}
	.card-title {
		margin-top: 14px;
		color: #121417;
		line-height: 1.5;
	}
	.card-title-model {
		color: #3470ff;
	}
	.card-list {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 12px;
	}
	.card-list-item {
		color: rgba(18, 20, 23, 0.5);
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 1.5;
		position: relative;
		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: -8px;
			width: 2px;
			height: 100%;
			background-color: rgba(18, 20, 23, 0.1);
		}
	}
	.card-list.second {
		margin-bottom: 4px;
	}
	.card-description {
		color: #121417;
		font-size: 14px;
		line-height: 1.4;
		margin-bottom: 24px;
		margin-top: 14px;
	}
	.card-subtitle {
		color: #121417;

		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 1.42;
		margin-bottom: 8px;
		margin-top: 24px;
	}
	.info-list {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.info-list-item {
		border-radius: 35px;
		background: #f9f9f9;
		color: #363535;
		font-size: 12px;
		line-height: 1.5;
		letter-spacing: -0.02em;
		padding: 7px 14px;
	}
	.card-more-btn {
		width: max-content;
		border-radius: 12px;
		border: none;
		background: #3470ff;
		display: block;
		padding: 12px 50px;
		color: #fff;
		font-size: 14px;
		font-weight: 600;
		line-height: 1.42;
		transition: all 0.3s ease-in-out;
		text-decoration: none;
		margin-top: 30px;
		&:hover {
			background-color: #0b44cd;
		}
	}
	.card-title-model {
		color: #3470ff;
	}
`;
