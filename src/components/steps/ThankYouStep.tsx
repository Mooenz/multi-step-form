import iconThankYou from '../../assets/icon/icon-thank-you.svg';

export function ThankYouStep() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 py-8 text-center md:min-h-thank-you md:py-12">
			<img
				src={iconThankYou}
				alt=""
				aria-hidden="true"
				className="size-20"
			/>
			<h1 className="text-2xl font-bold tracking-tight text-marine md:text-[32px]">
				Thank you!
			</h1>
			<p className="max-w-md text-sm leading-relaxed text-neutral-caption md:text-base">
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at{' '}
				<a
					href="mailto:support@loremgaming.com"
					className="text-marine underline underline-offset-2 transition-colors duration-500 ease-in-out hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
				>
					support@loremgaming.com
				</a>
				.
			</p>
		</div>
	);
}
