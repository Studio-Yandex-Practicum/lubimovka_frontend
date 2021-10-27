import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContactsForm } from './contacts-form';
import { TextInput } from 'components/ui/text-input';
import { TextArea } from 'components/ui/text-area';
import { Button } from 'components/ui/button';

export default {
  title: 'Components/ContactsForm',
  component: ContactsForm,
  subcomponents: { TextInput, TextArea, Button },
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto', maxWidth: '360px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof ContactsForm>;

const Template: ComponentStory<typeof ContactsForm> = () => {
  return (
    <ContactsForm>
      <ContactsForm.Fieldset>
        <TextInput
          placeholder='Ваше имя'
          ariaLabel='Ваше имя'
        />
        <TextInput
          placeholder='E-mail для ответа'
          ariaLabel='E-mail для ответа'
        />
        <TextArea
          ariaLabel=''
          placeholder='Текст сообщения'
          rows={4}
        />
      </ContactsForm.Fieldset>
      <ContactsForm.Button>
        <Button
          iconPlace='right'
          icon='arrow-right'
          size='l'
          border='full'
          label='Отправить'
          align='space-between'
          width='100%'
        />
      </ContactsForm.Button>
      <ContactsForm.Caption privacy='#' />
    </ContactsForm>
  );
};

export const Default = Template.bind({});
