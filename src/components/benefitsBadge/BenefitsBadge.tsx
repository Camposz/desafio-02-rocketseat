import { BenefitsBadgeContainer } from './styles';

interface BenefitsBadgeProps {
	icon: JSX.Element;
	color: string;
}

export const BenefitsBadge = ({ icon, color }: BenefitsBadgeProps) => {
	return <BenefitsBadgeContainer color={color}>{icon}</BenefitsBadgeContainer>;
};
