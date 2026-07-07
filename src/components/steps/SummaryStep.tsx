import { ADDONS } from '../../constants/form-data';
import { useFormPricing } from '../form/FormProvider';
import { useForm } from '../form/useForm';
import {
	formatPrice,
	getPlanLabel,
	getTotalLabel,
} from '../../lib/validation';

export function SummaryStep() {
	const { state, actions } = useForm();
	const { plan, planPrice, total } = useFormPricing(state);

	if (!plan) {
		return null;
	}

	const periodLabel = getPlanLabel(state.billingPeriod);
	const totalLabel = getTotalLabel(state.billingPeriod);

	return (
		<div className="flex flex-col gap-6">
			<header className="flex flex-col gap-2.5">
				<h1 className="text-2xl font-bold tracking-tight text-marine md:text-[32px]">
					Finishing up
				</h1>
				<p className="text-sm leading-relaxed text-neutral-caption md:text-base">
					Double-check everything looks OK before confirming.
				</p>
			</header>

			<section
				className="rounded-md bg-neutral-surface px-6 py-4"
				aria-label="Order summary"
			>
				<div className="flex items-start justify-between gap-4 pb-4">
					<div className="flex flex-col gap-2">
						<span className="text-base font-bold capitalize text-marine">
							{plan.name} ({periodLabel})
						</span>
						<button
							type="button"
							onClick={() => actions.goToStep(2)}
							className="w-fit border-none bg-transparent p-0 text-sm text-neutral-caption underline underline-offset-2 transition-colors duration-500 ease-in-out hover:text-primary hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
						>
							Change
						</button>
					</div>
					<span className="text-base font-bold text-marine">
						{formatPrice(planPrice, state.billingPeriod)}
					</span>
				</div>

				<div className="border-t border-neutral-border pt-4">
					<ul className="flex flex-col gap-3">
						{state.selectedAddons.map((addonId) => {
							const addon = ADDONS.find((item) => item.id === addonId);
							if (!addon) return null;

							const addonPrice =
								state.billingPeriod === 'monthly'
									? addon.monthlyPrice
									: addon.yearlyPrice;

							return (
								<li
									key={addon.id}
									className="flex items-start justify-between gap-4 text-sm"
								>
									<span className="text-neutral-caption">{addon.name}</span>
									<span className="font-medium text-neutral-caption">
										{formatPrice(addonPrice, state.billingPeriod, '+')}
									</span>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="mt-4 flex items-center justify-between gap-4 border-t border-neutral-border pt-4">
					<span className="text-sm text-neutral-caption">{totalLabel}</span>
					<span className="text-base font-bold text-primary">
						{formatPrice(total, state.billingPeriod, state.billingPeriod === 'monthly' ? '+' : '')}
					</span>
				</div>
			</section>
		</div>
	);
}
