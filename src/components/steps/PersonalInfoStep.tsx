import { TextInput } from '../ui/TextInput';
import { useForm } from '../form/useForm';

export function PersonalInfoStep() {
	const { state, actions } = useForm();
	const { personalInfo, errors, touched } = state;

	return (
		<div className="flex flex-col gap-6">
			<header className="flex flex-col gap-2.5">
				<h1 className="text-2xl font-bold tracking-tight text-marine md:text-[32px]">
					Personal info
				</h1>
				<p className="text-sm leading-relaxed text-neutral-caption md:text-base">
					Please provide your name, email address, and phone number.
				</p>
			</header>

			<div className="flex flex-col gap-5">
				<TextInput
					label="Name"
					name="name"
					autoComplete="name"
					placeholder="e.g. Stephen King"
					value={personalInfo.name}
					onChange={(event) =>
						actions.setPersonalInfoField('name', event.target.value)
					}
					onBlur={() => actions.setPersonalInfoTouched('name')}
					error={errors.name}
					showError={Boolean(touched.name && errors.name)}
				/>
				<TextInput
					label="Email Address"
					name="email"
					type="email"
					autoComplete="email"
					placeholder="e.g. stephenking@lorem.com"
					value={personalInfo.email}
					onChange={(event) =>
						actions.setPersonalInfoField('email', event.target.value)
					}
					onBlur={() => actions.setPersonalInfoTouched('email')}
					error={errors.email}
					showError={Boolean(touched.email && errors.email)}
				/>
				<TextInput
					label="Phone Number"
					name="phone"
					type="tel"
					autoComplete="tel"
					placeholder="e.g. +1 234 567 890"
					value={personalInfo.phone}
					onChange={(event) =>
						actions.setPersonalInfoField('phone', event.target.value)
					}
					onBlur={() => actions.setPersonalInfoTouched('phone')}
					error={errors.phone}
					showError={Boolean(touched.phone && errors.phone)}
				/>
			</div>
		</div>
	);
}
