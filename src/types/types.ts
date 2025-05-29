import type { ReactNode } from 'react';

export type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

export type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

export type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

export type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

type AccountData = {
  email: string;
  password: string;
};

export type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export type FormInputProps = {
  label: string;
  value: string;
  name: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
};
