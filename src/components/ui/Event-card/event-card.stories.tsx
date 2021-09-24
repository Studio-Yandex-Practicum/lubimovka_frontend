import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EventСard } from './event-card';

export default {
  title: 'UI/EventСard',
  component: EventСard,
} as ComponentMeta<typeof EventСard>;

const Template: ComponentStory<typeof EventСard> = (args) => {
  return (
    <>
      <EventСard {...args} />
      <EventСard
        time="13:00"
        location="Площадка «8/3»"
        title="Что я узнал"
        description="Гости"
        playwright="Ольга Ка"
        direct="Катя"
      />
      <EventСard {...args} />
    </>
  );
};
export const Event_Сard = Template.bind({});
Event_Сard.args = {
  img:
    'https://images.unsplash.com/photo-1621636723658-a062df4cbb2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  time: '13:00',
  location: 'Площадка «8/3»',
  title: 'Что я узнал',
  description: 'Гости расскажут о своём творческом и организационном опыте.',
  playwright: 'Ольга Казакова',
  direct: 'Катя Ганюшина',
};
