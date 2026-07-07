import { Button } from '../ui/Button';
import { useForm } from '../form/useForm';

interface FormNavigationProps {
	className?: string;
}

export function FormNavigation({ className = '' }: FormNavigationProps) {
	const { state, actions } = useForm();
	const isThankYou = state.step === 5;
	const showBack = state.step > 1 && state.step < 5;
	const isConfirmStep = state.step === 4;

	if (isThankYou) {
		return null;
	}

	return (
		<nav
			className={`flex items-center bg-surface px-6 py-4 md:bg-transparent md:px-0 md:py-0 md:pt-8 bg-red-500 ${
				showBack ? 'justify-between' : 'justify-end'
			} ${className}`}
			aria-label="Form navigation"
		>
			{showBack ? (
				<button
					type="button"
					onClick={actions.goBack}
					className="border-none bg-transparent px-0 py-2 text-sm font-medium text-neutral-caption transition-colors duration-500 ease-in-out hover:text-marine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
				>
					Go Back
				</button>
			) : null}

			{isConfirmStep ? (
				<Button variant="confirm" onClick={actions.confirm}>
					Confirm
				</Button>
			) : (
				<Button onClick={actions.goNext}>Next Step</Button>
			)}
		</nav>
	);
}
