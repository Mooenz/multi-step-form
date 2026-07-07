import { PLANS } from '../../constants/form-data';
import { BillingToggle } from '../ui/BillingToggle';
import { PlanCard } from '../ui/PlanCard';
import { useForm } from '../form/useForm';

export function SelectPlanStep() {
	const { state, actions } = useForm();

	return (
		<div className="flex flex-col gap-6">
			<header className="flex flex-col gap-2.5">
				<h1 className="text-2xl font-bold tracking-tight text-marine md:text-[32px]">
					Select your plan
				</h1>
				<p className="text-sm leading-relaxed text-neutral-caption md:text-base">
					You have the option of monthly or yearly billing.
				</p>
			</header>

			<div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-3">
				{PLANS.map((plan) => (
					<PlanCard
						key={plan.id}
						plan={plan}
						billingPeriod={state.billingPeriod}
						isSelected={state.selectedPlan === plan.id}
						onSelect={actions.selectPlan}
					/>
				))}
			</div>

			{state.planError ? (
				<p className="text-sm font-bold text-error" role="alert">
					{state.planError}
				</p>
			) : null}

			<BillingToggle />
		</div>
	);
}
