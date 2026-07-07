import bgSidebarMobile from '../../assets/images/bg-sidebar-mobile.svg';
import { StepIndicator } from './StepIndicator';
import { useForm } from './useForm';

export function MobileStepper() {
	const { state } = useForm();

	return (
		<header
			className="relative h-mobile-header overflow-hidden md:hidden"
			aria-label="Form steps"
		>
			<img
				src={bgSidebarMobile}
				alt=""
				className="absolute inset-0 size-full object-cover"
				aria-hidden="true"
			/>
			<div className="relative flex h-full items-start justify-center px-6 pt-8">
				<StepIndicator currentStep={state.step} variant="mobile" />
			</div>
		</header>
	);
}
