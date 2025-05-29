import { useState, type ReactElement } from 'react';

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const nextStep = () => {
    setCurrentStepIndex((index) => {
      if (index >= steps.length - 1) return index;

      return index + 1;
    });
  };

  const prevStep = () => {
    setCurrentStepIndex((index) => {
      if (index <= 0) return index;

      return index - 1;
    });
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    nextStep,
    prevStep,
  };
};
