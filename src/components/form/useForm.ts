import { use } from 'react';
import { FormContext } from './FormProvider';

export function useForm() {
	const context = use(FormContext);
	if (!context) {
		throw new Error('useForm must be used within FormProvider');
	}
	return context;
}
