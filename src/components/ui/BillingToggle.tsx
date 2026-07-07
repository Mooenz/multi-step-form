import type { BillingPeriod } from '../../types/form';
import { useForm } from '../form/useForm';

export function BillingToggle() {
	const { state, actions } = useForm();
	const isYearly = state.billingPeriod === 'yearly';

	return (
		<div
			className="flex items-center justify-center gap-6 rounded-md bg-neutral-surface px-4 py-3"
			role="group"
			aria-label="Billing period"
		>
			<span
				className={`text-sm font-bold transition-colors ${
					!isYearly ? 'text-marine' : 'text-neutral-caption'
				}`}
			>
				Monthly
			</span>
			<button
				type="button"
				role="switch"
				aria-checked={isYearly}
				aria-label={`Switch to ${isYearly ? 'monthly' : 'yearly'} billing`}
				onClick={() =>
					actions.setBillingPeriod(isYearly ? 'monthly' : ('yearly' as BillingPeriod))
				}
				className="relative h-5 w-10 shrink-0 rounded-full bg-marine transition-colors duration-500 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
			>
				<span
					aria-hidden="true"
					className={`absolute top-1 left-1 size-3 rounded-full bg-on-primary transition-transform ${
						isYearly ? 'translate-x-5' : 'translate-x-0'
					}`}
				/>
			</button>
			<span
				className={`text-sm font-bold transition-colors ${
					isYearly ? 'text-marine' : 'text-neutral-caption'
				}`}
			>
				Yearly
			</span>
		</div>
	);
}
