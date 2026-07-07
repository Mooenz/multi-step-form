import type { InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	showError?: boolean;
}

export function TextInput({
	label,
	error,
	showError = false,
	id,
	className = '',
	...props
}: TextInputProps) {
	const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');
	const hasError = showError && Boolean(error);

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between gap-4">
				<label htmlFor={inputId} className="text-sm font-bold text-marine">
					{label}
				</label>
				{hasError ? (
					<span
						id={`${inputId}-error`}
						className="text-xs font-bold text-error"
						role="alert"
					>
						{error}
					</span>
				) : null}
			</div>
			<input
				id={inputId}
				aria-invalid={hasError}
				aria-describedby={hasError ? `${inputId}-error` : undefined}
				className={`w-full rounded-md border bg-surface px-4 py-3 text-sm font-medium text-marine placeholder:text-neutral-caption transition-colors duration-500 ease-in-out focus:outline-none ${
					hasError
						? 'border-error'
						: 'border-neutral-border hover:border-marine-muted focus:border-marine-muted'
				} ${className}`}
				{...props}
			/>
		</div>
	);
}
