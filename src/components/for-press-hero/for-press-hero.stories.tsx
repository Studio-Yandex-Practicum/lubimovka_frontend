import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ForPressHero } from './for-press-hero';

import dataHeroTitle from 'components/for-press-hero/for-press-hero-title/assets/mock-data.json';
import dataHeroDescription from 'components/for-press-hero/for-press-hero-description/assets/mock-data.json';
import dataHeroPrContact from 'components/for-press-hero/for-press-hero-pr-contact/assets/mock-data.json';

export default {
  title: 'Components/ForPressHero',
  component: ForPressHero,
} as ComponentMeta<typeof ForPressHero>;

const Template: ComponentStory<typeof ForPressHero> = (args) => {
  return <ForPressHero {...args}/>;
};

export const Default = Template.bind({});

Default.parameters = {
  layout: 'fullscreen'
};

Default.args = {
  data : {
    forPressHeroTitle: {
      title: dataHeroTitle.title,
    },
    forPressHeroDescription: {
      description: dataHeroDescription.description,
      link: dataHeroDescription.link,
    },
    prPerson: {
      name: dataHeroPrContact.name,
      nameDative: dataHeroPrContact.nameDative,
      email: dataHeroPrContact.email,
      role: dataHeroPrContact.role,
      photo: dataHeroPrContact.photo,
    }
  } };
