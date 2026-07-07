import { z } from 'zod';

const required = 'This field is required';

export const planIdSchema = z.enum(['arcade', 'advanced', 'pro']);

export const addonIdSchema = z.enum([
	'online-service',
	'larger-storage',
	'customizable-profile',
]);

export const billingPeriodSchema = z.enum(['monthly', 'yearly']);

export const personalInfoSchema = z.object({
	name: z.string().trim().min(1, required),
	email: z
		.string()
		.trim()
		.min(1, required)
		.pipe(z.email('Please enter a valid email address')),
	phone: z.string().trim().min(1, required),
});

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type PlanId = z.infer<typeof planIdSchema>;
export type AddonId = z.infer<typeof addonIdSchema>;
export type BillingPeriod = z.infer<typeof billingPeriodSchema>;

export function getFieldErrors<T extends string>(
	error: z.ZodError,
): Partial<Record<T, string>> {
	return error.issues.reduce(
		(acc, issue) => {
			const field = issue.path[0];
			if (typeof field === 'string' && !(field in acc)) {
				acc[field as T] = issue.message;
			}
			return acc;
		},
		{} as Partial<Record<T, string>>,
	);
}

export function validatePersonalInfo(
	info: PersonalInfo,
): Partial<Record<keyof PersonalInfo, string>> {
	const result = personalInfoSchema.safeParse(info);
	if (result.success) return {};
	return getFieldErrors<keyof PersonalInfo>(result.error);
}

export function validatePlanSelection(plan: PlanId | null): string | null {
	const result = planIdSchema.safeParse(plan);
	if (result.success) return null;
	return result.error.issues[0]?.message ?? 'Please select a plan to continue';
}
