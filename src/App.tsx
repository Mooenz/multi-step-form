import { FormProvider } from './components/form/FormProvider';
import { MultiStepForm } from './components/form/FormLayout';

function App() {
	return (
		<FormProvider>
			<MultiStepForm />
		</FormProvider>
	);
}

export default App;
