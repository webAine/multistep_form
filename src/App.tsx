import { useState, type FormEvent } from 'react';
import AccountForm from './components/AccountForm';
import AddressForm from './components/AddressForm';
import UserForm from './components/UserForm';
import { useMultistepForm } from './hooks/useMultistepForm';
import type { FormData } from './types/types';

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
};

const App = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIndex, step, isFirstStep, prevStep, nextStep, isLastStep } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!isLastStep) return nextStep();

    alert('Successful account creation');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div>
          {!isFirstStep && (
            <button type='button' onClick={prevStep}>
              prev
            </button>
          )}
          <button type='submit'>{isLastStep ? 'finish' : 'next'}</button>
        </div>
      </form>
    </div>
  );
};

export default App;
