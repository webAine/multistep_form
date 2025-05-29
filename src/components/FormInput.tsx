import { Field, Input } from '@chakra-ui/react';
import type { FormInputProps } from '../types/types';

const FormInput = ({ label, value, name, onChange, type = 'text' }: FormInputProps) => {
  return (
    <Field.Root required>
      <Field.Label>
        {label}
        <Field.RequiredIndicator />
      </Field.Label>
      <Input type={type} name={name} value={value} onChange={(e) => onChange(e.target.value)} />
    </Field.Root>
  );
};

export default FormInput;
