import styled from 'styled-components';

export const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 30px;
	@media (width >= 768px) {
		align-items: end;
		justify-content: center;

		flex-direction: row;
	}

	.adverts-label {
		display: flex;
		flex-direction: column;
		color: #8a8a89;
		font-size: 14px;
		line-height: 1.3;
	}

	.adverts-input {
		box-sizing: border-box;
		width: 100%;
		padding: 14px 18px;
		border-radius: 14px;
		border: none;
		background: #f7f7fb;
		color: #121417;
		font-size: 18px;
		&:focus {
			border: none;
			outline: none;
		}
		&:nth-child(1) {
			@media (width >= 768px) {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
				border-right: 1px solid rgba(138, 138, 137, 0.2);
			}
		}
		&:nth-child(2) {
			@media (width >= 768px) {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
		}
	}
	.container-input {
		@media (width >= 768px) {
			display: flex;
		}
	}
	.adverts-select {
		padding: 14px 18px;
		border-radius: 14px;
		border: none;
		background: #f7f7fb;
		color: #121417;
		font-size: 18px;
	}
	.search-btn {
		height: max-content;
		margin: 0 auto;
		border-radius: 12px;
		border: none;
		background: #3470ff;
		display: flex;
		justify-content: center;
		align-items: center;
		width: max-content;
		padding: 14px 44px;
		color: #fff;
		font-size: 14px;
		font-weight: 600;
		line-height: 1.42;
		transition: all 0.3s ease-in-out;
		@media (width > 768px) {
			margin: 0;
		}
		&:hover {
			background-color: #0b44cd;
		}
	}
`;
