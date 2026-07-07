import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'confirm';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
	primary: 'bg-marine text-on-primary hover:bg-marine-hover',
	confirm: 'bg-primary text-on-primary hover:bg-primary-variant',
};

export function Button({
	variant = 'primary',
	className = '',
	children,
	type = 'button',
	...props
}: ButtonProps) {
	return (
		<button
			type={type}
			className={`rounded-md px-6 py-3.5 text-sm font-bold transition-colors duration-500 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer ${variantClasses[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
