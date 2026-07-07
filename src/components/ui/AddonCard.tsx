import iconCheckmark from '../../assets/icon/icon-checkmark.svg';
import type { AddonOption } from '../../constants/form-data';
import type { AddonId, BillingPeriod } from '../../types/form';
import { formatPrice } from '../../lib/validation';

interface AddonCardProps {
	addon: AddonOption;
	billingPeriod: BillingPeriod;
	isSelected: boolean;
	onToggle: (addonId: AddonId) => void;
}

export function AddonCard({
	addon,
	billingPeriod,
	isSelected,
	onToggle,
}: AddonCardProps) {
	const price =
		billingPeriod === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice;

	return (
		<button
			type="button"
			onClick={() => onToggle(addon.id)}
			aria-pressed={isSelected}
			className={`flex w-full items-center gap-4 rounded-md border bg-surface p-4 text-left transition-colors duration-500 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer ${
				isSelected
					? 'border-primary !bg-neutral-surface'
					: 'border-neutral-border hover:border-primary'
			}`}
		>
			<span
				aria-hidden="true"
				className={`grid size-5 shrink-0 place-items-center rounded-sm border transition-colors ${
					isSelected
						? 'border-primary bg-primary'
						: 'border-neutral-border bg-surface'
				}`}
			>
				{isSelected ? (
					<img src={iconCheckmark} alt="" className="size-3" />
				) : null}
			</span>
			<div className="flex min-w-0 flex-1 flex-col gap-1">
				<span className="text-base font-bold text-marine">{addon.name}</span>
				<span className="text-sm text-neutral-caption">{addon.description}</span>
			</div>
			<span
				key={billingPeriod}
				className={`shrink-0 text-sm font-medium animate-blurred-fade-in ${
					isSelected ? 'text-marine-muted' : 'text-neutral-caption'
				}`}
			>
				{formatPrice(price, billingPeriod, '+')}
			</span>
		</button>
	);
}
