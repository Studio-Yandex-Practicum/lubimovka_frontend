import { FormActions } from './actions';
import { FormDisclaimer } from './disclaimer';
import { FormError } from './error';
import { FormField } from './field';
import { FormFieldset } from './fieldset';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
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
