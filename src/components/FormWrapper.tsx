import { Heading, Stack } from '@chakra-ui/react';
import type { FormWrapperProps } from '../types/types';

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <Heading mb='5'>{title}</Heading>
      <Stack gap='4' align='flex-start' w='md'>{children}</Stack>
    </>
  );
};

export default FormWrapper;
