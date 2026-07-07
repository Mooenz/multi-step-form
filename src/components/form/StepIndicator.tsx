import { STEPS } from '../../constants/form-data';
import type { FormStep } from '../../types/form';

interface StepIndicatorProps {
	currentStep: FormStep;
	variant: 'sidebar' | 'mobile';
}

function getIndicatorState(stepNumber: number, currentStep: FormStep) {
	const activeStep = currentStep === 5 ? 4 : currentStep;

	if (stepNumber === activeStep && currentStep === 5) {
		return 'completed' as const;
	}

	if (stepNumber === activeStep) {
		return 'active' as const;
	}

	return 'inactive' as const;
}

function StepCircle({
	number,
	state,
	variant,
}: {
	number: number;
	state: 'active' | 'inactive' | 'completed';
	variant: 'sidebar' | 'mobile';
}) {
	const isMobile = variant === 'mobile';

	if (state === 'completed') {
		return (
			<span
				aria-hidden="true"
				className={`grid shrink-0 place-items-center rounded-full border font-bold transition-colors duration-500 ease-in-out ${
					isMobile
						? 'size-8 border-transparent bg-on-primary text-marine text-sm'
						: 'size-8 border-transparent bg-on-primary text-marine text-sm'
				}`}
			>
				{number}
			</span>
		);
	}

	if (state === 'active') {
		return (
			<span
				aria-hidden="true"
				className={`grid shrink-0 place-items-center rounded-full font-bold transition-colors duration-500 ease-in-out ${
					isMobile
						? 'size-8 bg-accent-sky text-marine text-sm'
						: 'size-8 bg-accent-sky text-marine text-sm'
				}`}
			>
				{number}
			</span>
		);
	}

	return (
		<span
			aria-hidden="true"
			className={`grid shrink-0 place-items-center rounded-full border font-bold transition-colors duration-500 ease-in-out ${
				isMobile
					? 'size-8 border-on-primary text-on-primary text-sm'
					: 'size-8 border-on-primary text-on-primary text-sm'
			}`}
		>
			{number}
		</span>
	);
}

export function StepIndicator({ currentStep, variant }: StepIndicatorProps) {
	const isSidebar = variant === 'sidebar';

	return (
		<ol
			className={
				isSidebar
					? 'relative z-10 flex flex-col gap-6'
					: 'relative z-10 flex items-center justify-center gap-4'
			}
			aria-label="Form progress"
		>
			{STEPS.map((step) => {
				const state = getIndicatorState(step.number, currentStep);
				const isActive = state === 'active' || state === 'completed';

				return (
					<li
						key={step.number}
						className={
							isSidebar
								? 'flex items-center gap-4'
								: 'flex items-center justify-center'
						}
						aria-current={isActive ? 'step' : undefined}
					>
						<StepCircle number={step.number} state={state} variant={variant} />
						{isSidebar ? (
							<div className="flex flex-col gap-1">
								<span className="text-xs uppercase tracking-[0.08em] text-accent-sky">
									Step {step.number}
								</span>
								<span className="text-sm font-bold uppercase tracking-[0.06em] text-on-primary">
									{step.label}
								</span>
							</div>
						) : null}
					</li>
				);
			})}
		</ol>
	);
}
