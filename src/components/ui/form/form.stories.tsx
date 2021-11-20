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
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
  return <Form {...args} />;
};

export const ContactForm = Template.bind({});
ContactForm.args = {
  children: (
    <>
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
          <Link href={'#'}>
            <a>на обработку персональных данных </a>
          </Link>
        </Form.ActionCaption>
      </Form.Actions>
    </>
  ),
};

export const ProposalForm = Template.bind({});
ProposalForm.args = {
  children: (
    <>
      <Form.Fieldset legend="О вас">
        <Form.Field>
          <TextInput
            ariaLabel="Имя"
            placeholder="Имя"
          />
        </Form.Field>
        <Form.Field>
          <TextInput
            ariaLabel="Фамилия"
            placeholder="Фамилия"
          />
        </Form.Field>
        <Form.Field>
          <TextInput
            ariaLabel="Год рождения"
            placeholder="Год рождения"
          />
        </Form.Field>
        <Form.Field>
          <TextInput
            ariaLabel="Город проживания"
            placeholder="Город проживания"
          />
        </Form.Field>
        <Form.Field>
          <TextInput
            ariaLabel="Номер телефона"
            placeholder="Номер телефона"
          />
        </Form.Field>
        <Form.Field>
          <TextInput
            ariaLabel="E-mail"
            placeholder="E-mail"
          />
        </Form.Field>
      </Form.Fieldset>
      <Form.Fieldset legend="О пьесе">
        <Form.Field>
          <TextInput
            ariaLabel="Название"
            placeholder="Название"
          />
        </Form.Field>
        <Form.Field>
          <TextInput
            ariaLabel="Год написания"
            placeholder="Год написания"
          />
        </Form.Field>
        <Form.Actions>
          <Form.Action>
            <FileInput />
          </Form.Action>
          <Form.ActionCaption view="shift">
            <p> Только файлы формата .doc, .docx, .txt, .odt, .pdf. </p>

            <p>
              Название файла должно содержать сначала фамилию автора, а затем
              название пьесы, например Chehov-Chaika.doc{'\n'}
              Название файла с пьесой не должно содержать кириллические символы
              и пробелы. В названии файла должны быть только латинские символы и
              знаки - и _.
            </p>
          </Form.ActionCaption>
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
            <Link href={'#'}>
              <a>на обработку персональных данных </a>
            </Link>
          </Form.ActionCaption>
        </Form.Actions>
      </Form.Fieldset>
    </>
  ),
};
