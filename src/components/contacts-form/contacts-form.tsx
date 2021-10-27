import { ContactsFormButton } from './button';
import { ContactsFormCaption } from './caption';
import { ContactsFormFieldset } from './fieldset';

interface IConstactsFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export const ContactsForm = (props: IConstactsFormProps): JSX.Element => {
  const { children, ...restProps } = props;

  return (
    <form {...restProps}>
      {children}
    </form>
  );
};

ContactsForm.Fieldset = ContactsFormFieldset;
ContactsForm.Button = ContactsFormButton;
ContactsForm.Caption = ContactsFormCaption;
