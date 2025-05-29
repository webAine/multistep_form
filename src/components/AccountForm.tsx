import { Field, Stack } from '@chakra-ui/react';
import { PasswordInput, PasswordStrengthMeter } from '@/components/ui/password-input';
import zxcvbn from 'zxcvbn';
import type { AccountFormProps } from '../types/types';
import FormWrapper from './FormWrapper';
import FormInput from './FormInput';

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  const result = zxcvbn(password);
  const score = result.score;

  return (
    <FormWrapper title='Account Creation'>
      <FormInput label='Email' name='email' type='email' value={email} onChange={(val) => updateFields({ email: val })} required />

      <Field.Root required>
        <Field.Label>
          Password
          <Field.RequiredIndicator />
        </Field.Label>

        <Stack w='md'>
          <PasswordInput type='password' value={password} onChange={(e) => updateFields({ password: e.target.value })} />
          <PasswordStrengthMeter value={score} />
        </Stack>
      </Field.Root>
    </FormWrapper>
  );
};

export default AccountForm;
