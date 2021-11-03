import FormFieldset from './fieldset';
import FormField from './field';
import FormActions from './actions';
import FormAction from './action';
import FormActionCaption from './action-caption';

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form = (props: IFormProps): JSX.Element => {
  const { children, ...restProps } = props;

  return (
    <form {...restProps}>
      {children}
    </form>
  );
};

Form.Fieldset = FormFieldset;
Form.Field = FormField;
Form.Actions = FormActions;
Form.Action = FormAction;
Form.ActionCaption = FormActionCaption;

export default Form;
