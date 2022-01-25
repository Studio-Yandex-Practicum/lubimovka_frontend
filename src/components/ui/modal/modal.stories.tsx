import { useState } from 'react';
import { Story, ComponentMeta } from '@storybook/react';

import { Modal } from './modal';

export default {
  title: 'UI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: Story<typeof Modal> = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleVisibility = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleVisibility}>Открыть модалку</button>
      <Modal
        isOpen={isOpen}
        onClose={toggleVisibility}
        Backdrop={Modal.Backdrop}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="text" placeholder="Поле ввода"/>
          <button onClick={toggleVisibility}>Закрыть модалку</button>
        </div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
