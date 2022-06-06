import { FormFieldset } from './fieldset';
import { FormField } from './field';
import { FormActions } from './actions';
import { FormError } from './error';
import { FormDisclaimer } from './disclaimer';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Component = (props: FormProps) => {
  const { children, ...restProps } = props;

  return (
    <form {...restProps}>
      {children}
    </form>
  );
};

Component.displayName = 'Form';

const Form = Object.assign(Component, {
  Fieldset: FormFieldset,
  Field: FormField,
  Actions: FormActions,
  Error: FormError,
  Disclaimer: FormDisclaimer,
});

export default Form;
