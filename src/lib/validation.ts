import type { BillingPeriod } from './schemas';

export function formatPrice(
	amount: number,
	period: BillingPeriod,
	prefix = '',
): string {
	const suffix = period === 'monthly' ? '/mo' : '/yr';
	return `${prefix}$${amount}${suffix}`;
}

export function getPlanLabel(period: BillingPeriod): string {
	return period === 'monthly' ? 'Monthly' : 'Yearly';
}

export function getTotalLabel(period: BillingPeriod): string {
	return period === 'monthly' ? 'Total (per month)' : 'Total (per year)';
}
