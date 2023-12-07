import styled from 'styled-components';

export const Div = styled.div`
	.card-container-img {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		width: 100%;
		height: 274px;
	}
	.card-img {
		object-fit: cover;
		height: 100%;
		width: 100%;
		border-radius: 14px;
		background: linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%), #f3f3f2;
	}
	.card-favorite-icon {
		position: absolute;
		top: 14px;
		right: 14px;
		cursor: pointer;
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
		margin-bottom: 30px;
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
	.card-more-btn {
		width: 100%;
		border-radius: 12px;
		border: none;
		background: #3470ff;
		display: block;
		padding: 12px;
		color: #fff;
		font-size: 14px;
		font-weight: 600;
		line-height: 1.42;
		transition: all 0.3s ease-in-out;
		&:hover {
			background-color: #0b44cd;
		}
	}
`;
