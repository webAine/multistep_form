import type { AddressFormProps } from '../types/types';
import FormWrapper from './FormWrapper';
import FormInput from './FormInput';

const AddressForm = ({ street, city, state, zip, updateFields }: AddressFormProps) => {
  return (
    <FormWrapper title='Address'>
      <FormInput label='Street' name='street' value={street} onChange={(val) => updateFields({ street: val })} />
      <FormInput label='City' name='city' value={city} onChange={(val) => updateFields({ city: val })} />
      <FormInput label='State' name='state' value={state} onChange={(val) => updateFields({ state: val })} />
      <FormInput label='Zip' name='zip' value={zip} onChange={(val) => updateFields({ zip: val })} />
    </FormWrapper>
  );
};

export default AddressForm;
