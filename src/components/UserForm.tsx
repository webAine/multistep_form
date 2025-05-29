import FormInput from './FormInput';
import type { UserFormProps } from '../types/types';
import FormWrapper from './FormWrapper';

const UserForm = ({ firstName, lastName, age, updateFields }: UserFormProps) => {
  return (
    <FormWrapper title='User Details'>
      <FormInput label='First Name' name='firstName' value={firstName} onChange={(val) => updateFields({ firstName: val })} required />
      <FormInput label='Last Name' name='lastName' value={lastName} onChange={(val) => updateFields({ lastName: val })} required />
      <FormInput label='Age' name='age' type='number' value={age} onChange={(val) => updateFields({ age: val })} required />
    </FormWrapper>
  );
};

export default UserForm;
