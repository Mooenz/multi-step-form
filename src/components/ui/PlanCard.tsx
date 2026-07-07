import type { PlanOption } from '../../constants/form-data';
import type { BillingPeriod, PlanId } from '../../types/form';
import { formatPrice } from '../../lib/validation';

interface PlanCardProps {
	plan: PlanOption;
	billingPeriod: BillingPeriod;
	isSelected: boolean;
	onSelect: (planId: PlanId) => void;
}

export function PlanCard({
	plan,
	billingPeriod,
	isSelected,
	onSelect,
}: PlanCardProps) {
	const price =
		billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;

	return (
		<button
			type="button"
			onClick={() => onSelect(plan.id)}
			aria-pressed={isSelected}
			className={`flex w-full items-center gap-4 rounded-md border bg-surface p-4 text-left transition-colors duration-500 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer focus-visible:outline-primary md:flex-col md:items-start md:gap-8 md:p-5 ${
				isSelected
					? 'border-primary !bg-primary/5'
					: 'border-neutral-border hover:border-primary'
			}`}
		>
			<img src={plan.icon} alt="" aria-hidden="true" className="size-10 shrink-0" />
			<div className="flex flex-1 flex-col gap-1 md:flex-none">
				<span className="text-base font-bold text-marine">{plan.name}</span>
				<span
					key={billingPeriod}
					className="text-sm text-neutral-caption animate-blurred-fade-in"
				>
					{formatPrice(price, billingPeriod)}
				</span>
				{billingPeriod === 'yearly' ? (
					<span className="text-sm font-bold text-marine animate-blurred-fade-in">
						2 months free
					</span>
				) : null}
			</div>
		</button>
	);
}
