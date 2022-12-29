import styled from 'styled-components';

const BenefitsBadgeContainer = styled.div`
	background: ${({ color }) => color};
	padding: 8px;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { BenefitsBadgeContainer };
