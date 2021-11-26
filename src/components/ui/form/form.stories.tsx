import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from 'next/link';

import Form from './form';
import TextInput from 'components/ui/text-input';
import TextArea from 'components/ui/text-area';
import { Button } from 'components/ui/button';
import { FileInput } from 'components/ui/file-input';

export default {
  title: 'UI/Form',
  component: Form,
  subcomponents: { TextInput, TextArea, Button, FileInput },
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '420px' }}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
  return <Form {...args}/>;
};

export const ContactForm = Template.bind({});
ContactForm.args = {
  children: (
    <>
      <Form.Field>
        <TextInput
          placeholder="Ваше имя"
        />
      </Form.Field>
      <Form.Field>
        <TextInput
          placeholder="E-mail для ответа"
        />
      </Form.Field>
      <Form.Field>
        <TextArea
          placeholder="Текст сообщения"
          rows={4}
        />
      </Form.Field>
      <Form.Actions>
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
      </Form.Actions>
      <Form.Disclaimer>
        {'Нажимая на кнопку «Отправить» вы даёте согласие '}
        <Link href={'#'}>
          <a>на обработку персональных данных </a>
        </Link>
      </Form.Disclaimer>
    </>
  ),
};
