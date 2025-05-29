import type { FormWrapperProps } from '../types/types';

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
};

export default FormWrapper;
