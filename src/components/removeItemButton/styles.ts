import styled from 'styled-components';

const RemoveIconButtonContainer = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px;
	gap: 5px;
	background: ${({ theme }) => theme.button};
	border-radius: 6px;
	cursor: pointer;

	span {
		font-size: 0.8rem;

		@media only screen and (max-width: 1309px) {
			display: none;
		}
	}

	&:hover {
		background: ${({ theme }) => theme.hover};
	}
`;

export { RemoveIconButtonContainer };
