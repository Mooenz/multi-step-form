import { type ReactNode } from 'react';
import { AddOnsStep } from '../steps/AddOnsStep';
import { PersonalInfoStep } from '../steps/PersonalInfoStep';
import { SelectPlanStep } from '../steps/SelectPlanStep';
import { SummaryStep } from '../steps/SummaryStep';
import { ThankYouStep } from '../steps/ThankYouStep';
import { FormNavigation } from './FormNavigation';
import { MobileStepper } from './MobileStepper';
import { Sidebar } from './Sidebar';
import { useForm } from './useForm';

interface FormLayoutProps {
	children: ReactNode;
}

export function FormLayout({ children }: FormLayoutProps) {
	return (
		<div className="flex min-h-dvh flex-col bg-page-background md:items-center md:justify-center md:p-6">
			<MobileStepper />

			<div className="relative z-10 mx-auto flex w-full max-w-form flex-1 flex-col md:mx-0 md:min-h-form md:flex-none md:overflow-hidden md:rounded-lg md:bg-surface md:shadow-[var(--shadow-card)] md:grid md:grid-cols-[274px_1fr] md:p-4 lg:max-w-235 overflow-x-auto">
				<Sidebar />

				<div className="-mt-4 flex flex-1 flex-col rounded-t-lg bg-surface px-6 pb-0 pt-8 md:mt-0 md:rounded-none md:px-10 md:py-10 lg:px-25">
					<main className="flex flex-1 flex-col" aria-live="polite">
						{children}
					</main>
					<FormNavigation className="hidden md:flex" />
				</div>
			</div>

			<FormNavigation className="sticky bottom-0 mt-auto border-t border-neutral-border md:hidden" />
		</div>
	);
}

const STEP_COMPONENTS: Record<number, React.ComponentType> = {
	1: PersonalInfoStep,
	2: SelectPlanStep,
	3: AddOnsStep,
	4: SummaryStep,
	5: ThankYouStep,
};

function StepContent() {
	const { state } = useForm();
	const Component = STEP_COMPONENTS[state.step];

	if (!Component) return null;

	return (
		<div key={state.step} className="animate-fade-in">
			<Component />
		</div>
	);
}

export function MultiStepForm() {
	return (
		<FormLayout>
			<StepContent />
		</FormLayout>
	);
}
