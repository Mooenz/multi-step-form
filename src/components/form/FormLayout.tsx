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
		<div className="flex min-h-dvh flex-col bg-page-background md:items-center md:justify-center md:p-6 animate-slide-in-bottom duration-500 ease-in-out">
			<MobileStepper />

			<div className="relative z-10 mx-auto flex w-full max-w-form flex-1 flex-col md:mx-0 md:min-h-form md:flex-none md:overflow-hidden md:rounded-xl md:!bg-surface md:shadow-(--shadow-card) md:grid md:grid-cols-[274px_1fr] md:p-4 lg:max-w-235 !bg-page-background px-4">
				<Sidebar />

				<div className="-mt-18 flex flex-col rounded-t-lg bg-surface px-6 py-8 md:mt-0 md:rounded-none md:px-10 md:py-10 lg:px-25  rounded-lg shadow-(--shadow-card) md:shadow-none mb-6 max-w-4xl md:max-w-none mx-auto">
					<main className="flex flex-1 flex-col" aria-live="polite">
						{children}
					</main>
					<FormNavigation className="hidden md:flex" />
				</div>
			</div>

			<FormNavigation className="mt-auto border-t border-neutral-border/30  md:hidden" />
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
