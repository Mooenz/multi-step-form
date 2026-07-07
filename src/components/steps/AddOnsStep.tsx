import { ADDONS } from '../../constants/form-data';
import { AddonCard } from '../ui/AddonCard';
import { useForm } from '../form/useForm';

export function AddOnsStep() {
	const { state, actions } = useForm();

	return (
		<div className="flex flex-col gap-6">
			<header className="flex flex-col gap-2.5">
				<h1 className="text-2xl font-bold tracking-tight text-marine md:text-[32px]">
					Pick add-ons
				</h1>
				<p className="text-sm leading-relaxed text-neutral-caption md:text-base">
					Add-ons help enhance your gaming experience.
				</p>
			</header>

			<div className="flex flex-col gap-3" role="group" aria-label="Add-on options">
				{ADDONS.map((addon) => (
					<AddonCard
						key={addon.id}
						addon={addon}
						billingPeriod={state.billingPeriod}
						isSelected={state.selectedAddons.includes(addon.id)}
						onToggle={actions.toggleAddon}
					/>
				))}
			</div>
		</div>
	);
}
