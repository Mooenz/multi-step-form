import type {
	AddonId,
	BillingPeriod,
	PersonalInfo,
	PlanId,
} from '../lib/schemas';

export type { AddonId, BillingPeriod, PersonalInfo, PlanId };

export type FormStep = 1 | 2 | 3 | 4 | 5;

export type PersonalInfoField = keyof PersonalInfo;

export interface FormState {
	step: FormStep;
	personalInfo: PersonalInfo;
	billingPeriod: BillingPeriod;
	selectedPlan: PlanId | null;
	selectedAddons: AddonId[];
	errors: Partial<Record<PersonalInfoField, string>>;
	touched: Partial<Record<PersonalInfoField, boolean>>;
	planError: string | null;
}

export interface FormActions {
	setPersonalInfoField: (field: PersonalInfoField, value: string) => void;
	setPersonalInfoTouched: (field: PersonalInfoField) => void;
	setBillingPeriod: (period: BillingPeriod) => void;
	selectPlan: (planId: PlanId) => void;
	toggleAddon: (addonId: AddonId) => void;
	goNext: () => void;
	goBack: () => void;
	goToStep: (step: FormStep) => void;
	confirm: () => void;
}

export interface FormMeta {
	totalSteps: number;
}

export interface FormContextValue {
	state: FormState;
	actions: FormActions;
	meta: FormMeta;
}
