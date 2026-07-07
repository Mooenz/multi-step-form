import {
	createContext,
	useCallback,
	useMemo,
	useState,
	type ReactNode,
} from 'react';
import { ADDONS, PLANS } from '../../constants/form-data';
import { validatePersonalInfo, validatePlanSelection } from '../../lib/schemas';
import type {
	AddonId,
	BillingPeriod,
	FormActions,
	FormContextValue,
	FormMeta,
	FormState,
	FormStep,
	PersonalInfoField,
	PlanId,
} from '../../types/form';

const initialState: FormState = {
	step: 1,
	personalInfo: { name: '', email: '', phone: '' },
	billingPeriod: 'monthly',
	selectedPlan: 'arcade',
	selectedAddons: ['online-service', 'larger-storage'],
	errors: {},
	touched: {},
	planError: null,
};

export const FormContext = createContext<FormContextValue | null>(null);

export function FormProvider({ children }: { children: ReactNode }) {
	const [state, setState] = useState<FormState>(initialState);

	const setPersonalInfoField = useCallback(
		(field: PersonalInfoField, value: string) => {
			setState((current) => ({
				...current,
				personalInfo: { ...current.personalInfo, [field]: value },
				errors: { ...current.errors, [field]: undefined },
			}));
		},
		[],
	);

	const setPersonalInfoTouched = useCallback((field: PersonalInfoField) => {
		setState((current) => ({
			...current,
			touched: { ...current.touched, [field]: true },
		}));
	}, []);

	const setBillingPeriod = useCallback((period: BillingPeriod) => {
		setState((current) => ({ ...current, billingPeriod: period }));
	}, []);

	const selectPlan = useCallback((planId: PlanId) => {
		setState((current) => ({
			...current,
			selectedPlan: planId,
			planError: null,
		}));
	}, []);

	const toggleAddon = useCallback((addonId: AddonId) => {
		setState((current) => {
			const isSelected = current.selectedAddons.includes(addonId);
			return {
				...current,
				selectedAddons: isSelected
					? current.selectedAddons.filter((id) => id !== addonId)
					: [...current.selectedAddons, addonId],
			};
		});
	}, []);

	const goToStep = useCallback((step: FormStep) => {
		setState((current) => ({ ...current, step }));
	}, []);

	const goBack = useCallback(() => {
		setState((current) => {
			if (current.step <= 1 || current.step === 5) return current;
			return { ...current, step: (current.step - 1) as FormStep };
		});
	}, []);

	const goNext = useCallback(() => {
		setState((current) => {
			if (current.step === 1) {
				const errors = validatePersonalInfo(current.personalInfo);
				if (Object.keys(errors).length > 0) {
					return {
						...current,
						errors,
						touched: { name: true, email: true, phone: true },
					};
				}
				return { ...current, step: 2, errors: {} };
			}

			if (current.step === 2) {
				const planError = validatePlanSelection(current.selectedPlan);
				if (planError) {
					return { ...current, planError };
				}
				return { ...current, step: 3, planError: null };
			}

			if (current.step === 3) {
				return { ...current, step: 4 };
			}

			return current;
		});
	}, []);

	const confirm = useCallback(() => {
		setState((current) => ({ ...current, step: 5 }));
	}, []);

	const actions: FormActions = useMemo(
		() => ({
			setPersonalInfoField,
			setPersonalInfoTouched,
			setBillingPeriod,
			selectPlan,
			toggleAddon,
			goNext,
			goBack,
			goToStep,
			confirm,
		}),
		[
			setPersonalInfoField,
			setPersonalInfoTouched,
			setBillingPeriod,
			selectPlan,
			toggleAddon,
			goNext,
			goBack,
			goToStep,
			confirm,
		],
	);

	const meta: FormMeta = useMemo(() => ({ totalSteps: 4 }), []);

	const value = useMemo(
		() => ({ state, actions, meta }),
		[state, actions, meta],
	);

	return <FormContext value={value}>{children}</FormContext>;
}

export function useFormPricing(state: FormState) {
	return useMemo(() => {
		const plan = PLANS.find((item) => item.id === state.selectedPlan);
		const planPrice = plan
			? state.billingPeriod === 'monthly'
				? plan.monthlyPrice
				: plan.yearlyPrice
			: 0;

		const addonPrices = state.selectedAddons.map((addonId) => {
			const addon = ADDONS.find((item) => item.id === addonId);
			if (!addon) return 0;
			return state.billingPeriod === 'monthly'
				? addon.monthlyPrice
				: addon.yearlyPrice;
		});

		const addonsTotal = addonPrices.reduce((sum, price) => sum + price, 0);
		const total = planPrice + addonsTotal;

		return { plan, planPrice, addonsTotal, total };
	}, [state.selectedPlan, state.selectedAddons, state.billingPeriod]);
}
