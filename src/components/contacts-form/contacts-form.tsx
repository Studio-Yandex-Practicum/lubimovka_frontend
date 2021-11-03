import classNames from 'classnames/bind';

import Form from 'components/ui/form/form';
import TextInput from 'components/ui/text-input/text-input';
import TextArea from 'components/ui/text-area';
import { Button } from 'components/ui/button';
import Link from 'next/dist/client/link';

import styles from './contacts-form.module.css';
const cx = classNames.bind(styles);

interface IContactsFormProps {
  privacy: string;
}

const ContactsForm = (props: IContactsFormProps): JSX.Element => {
  const { privacy } = props;

  return (
    <>
      <h1 id='contact' className={cx('title')}>
        Если вам есть, чем поделиться или хотите задать вопрос
      </h1>
      <Form className={cx('form')} aria-labeledby='contact'>
        <Form.Field>
          <TextInput
            ariaLabel="Ваше имя"
            placeholder="Ваше имя"
          />
        </Form.Field>
        <Form.Field>
          <TextInput
            ariaLabel="E-mail для ответа"
            placeholder="E-mail для ответа"
          />
        </Form.Field>
        <Form.Field>
          <TextArea
            ariaLabel="Текст сообщения"
            placeholder="Текст сообщения"
            rows={4}
          />
        </Form.Field>
        <Form.Actions>
          <Form.Action>
            <Button
              type="submit"
              iconPlace="right"
              icon="arrow-right"
              size="l"
              border="full"
              label="Отправить"
              align="space-between"
              width="100%"
            />
          </Form.Action>
          <Form.ActionCaption view="below">
            {'Нажимая на кнопку «Отправить» вы даёте согласие '}
            <Link href={privacy}>
              <a>на обработку персональных данных </a>
            </Link>
          </Form.ActionCaption>
        </Form.Actions>
      </Form>
    </>
  );
};

export default ContactsForm;
