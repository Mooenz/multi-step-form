import type { AddonId, PlanId } from '../types/form';
import iconArcade from '../assets/icon/icon-arcade.svg';
import iconAdvanced from '../assets/icon/icon-advanced.svg';
import iconPro from '../assets/icon/icon-pro.svg';

export const STEPS = [
	{ number: 1, label: 'YOUR INFO' },
	{ number: 2, label: 'SELECT PLAN' },
	{ number: 3, label: 'ADD-ONS' },
	{ number: 4, label: 'SUMMARY' },
] as const;

export interface PlanOption {
	id: PlanId;
	name: string;
	icon: string;
	monthlyPrice: number;
	yearlyPrice: number;
}

export interface AddonOption {
	id: AddonId;
	name: string;
	description: string;
	monthlyPrice: number;
	yearlyPrice: number;
}

export const PLANS: readonly PlanOption[] = [
	{
		id: 'arcade',
		name: 'Arcade',
		icon: iconArcade,
		monthlyPrice: 9,
		yearlyPrice: 90,
	},
	{
		id: 'advanced',
		name: 'Advanced',
		icon: iconAdvanced,
		monthlyPrice: 12,
		yearlyPrice: 120,
	},
	{
		id: 'pro',
		name: 'Pro',
		icon: iconPro,
		monthlyPrice: 15,
		yearlyPrice: 150,
	},
];

export const ADDONS: readonly AddonOption[] = [
	{
		id: 'online-service',
		name: 'Online service',
		description: 'Access to multiplayer games',
		monthlyPrice: 1,
		yearlyPrice: 10,
	},
	{
		id: 'larger-storage',
		name: 'Larger storage',
		description: 'Extra 1TB of cloud save',
		monthlyPrice: 2,
		yearlyPrice: 20,
	},
	{
		id: 'customizable-profile',
		name: 'Customizable Profile',
		description: 'Custom theme on your profile',
		monthlyPrice: 2,
		yearlyPrice: 20,
	},
];
