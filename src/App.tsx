import { useState, type FormEvent } from 'react';
import { Alert, Button, ButtonGroup, Center, CloseButton, Stack, Text } from '@chakra-ui/react';
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
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    setIsSubmitted(true);
  };

  return (
    <Center h='100vh'>
      <form onSubmit={onSubmit}>
        <Stack gap='4' align='flex-start' w='md'>
          <Text w='100%' textAlign='end'>
            Step: {currentStepIndex + 1} / {steps.length}
          </Text>
          {step}

          <ButtonGroup justify='flex-end' w='100%' display='flex' variant='outline'>
            {!isFirstStep && (
              <Button size='lg' w='150px' type='button' onClick={prevStep}>
                prev
              </Button>
            )}
            <Button colorPalette={isLastStep ? 'teal' : undefined} size='lg' w='150px' type='submit'>
              {isLastStep ? 'finish' : 'next'}
            </Button>
          </ButtonGroup>
        </Stack>
      </form>
      {isSubmitted && (
        <Alert.Root pos='absolute' bottom='5' left='3' insetEnd='-2' maxW='600px'>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Success!</Alert.Title>
            <Alert.Description>You have successfully registered. We have sent you a confirmation email.</Alert.Description>
          </Alert.Content>
          <CloseButton onClick={() => setIsSubmitted(false)} pos='relative' top='-2' insetEnd='-2' />
        </Alert.Root>
      )}
    </Center>
  );
};

export default App;
