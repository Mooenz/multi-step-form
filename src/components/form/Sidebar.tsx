import bgSidebarDesktop from '../../assets/images/bg-sidebar-desktop.svg';
import { StepIndicator } from './StepIndicator';
import { useForm } from './useForm';

export function Sidebar() {
	const { state } = useForm();

	return (
		<aside
			className="relative hidden min-h-form overflow-hidden rounded-lg md:block"
			aria-label="Form steps"
		>
			<img
				src={bgSidebarDesktop}
				alt=""
				className="absolute inset-0 size-full object-cover"
				aria-hidden="true"
			/>
			<div className="relative flex h-full flex-col justify-start px-8 py-10">
				<StepIndicator currentStep={state.step} variant="sidebar" />
			</div>
		</aside>
	);
}
