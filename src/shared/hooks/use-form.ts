import { useState, useEffect } from 'react';

type ErrorMessage = string

interface AnyValues {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [field: string]: any
}

interface Config<Values> {
  initialValues: Values
  validate?: (values: Values) => {
    [field in keyof Values]: ErrorMessage
  }
}

export type FormErrors<Values> = {
  [K in keyof Values]?: ErrorMessage
} & {
  nonFieldError?: ErrorMessage
}

export type FormTouched<Values> = {
  [K in keyof Values]?: boolean
}

export type FormFieldValueSetter<Values> = <K extends keyof Values>(field: K, value: Values[K]) => void

export type FormFieldErrorSetter<Values> = <K extends keyof Values>(field: K, errorMessage?: ErrorMessage) => void

export const useForm = <T extends AnyValues = AnyValues>(config: Config<T>) => {
  const { initialValues, validate } = config;

  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState(<FormTouched<T>>{});
  const [errors, setErrors] = useState<FormErrors<T>>({});

  const setFieldValue: FormFieldValueSetter<T> = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  const setFieldError: FormFieldErrorSetter<T> = (field, errorMessage) => {
    setErrors({
      ...errors,
      [field]: errorMessage,
    });
  };

  const setNonFieldError = (errorMessage: ErrorMessage) => {
    setErrors({
      ...errors,
      nonFieldError: errorMessage,
    });
  };

  useEffect(() => {
    if (!validate) {
      return;
    }

    setErrors(validate(values));
  }, [values, validate]);

  const {
    nonFieldError,
    ...fieldErrors
  } = errors;

  return {
    values,
    setFieldValue,
    touched, errors:
    fieldErrors,
    setFieldError,
    nonFieldError,
    setNonFieldError,
  };
};
