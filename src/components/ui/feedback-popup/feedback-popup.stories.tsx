import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FeedbackPopup, PersonCardData } from './feedback-popup';

const fakeData: PersonCardData[] = [
  {
    id: 1,
    person: {
      id: 1,
      first_name: 'Тереза',
      second_name: 'Шимчак',
      middle_name: 'Олеговна',
      city: 'Москва',
      email: '123@yandex.ru',
      image: 'https://i.pinimg.com/736x/5b/43/87/5b4387ed7f09f2ac8b3d357473e6be03--role-models.jpg',
    },
    year: 2021,
    review: 'Очень интересный фестиваль'
  },
  {
    id: 2,
    person: {
      id: 2,
      first_name: 'Чеслав',
      second_name: 'Качмарек',
      middle_name: 'Качмарек',
      city: 'Москва',
      email: '123@yandex.ru',
      image: 'https://i.pinimg.com/736x/5b/43/87/5b4387ed7f09f2ac8b3d357473e6be03--role-models.jpg',
    },
    year: 2021,
    title: '',
    review: 'Очень интересный фестиваль, Очень интересный фестиваль. Очень интересный фестиваль Очень интересный фестиваль'
  },
  {
    id: 3,
    person: {
      id: 3,
      first_name: 'Сабина',
      second_name: 'Соха',
      middle_name: 'Соха',
      city: 'Москва',
      email: '123@yandex.ru',
      image: 'https://i.pinimg.com/736x/5b/43/87/5b4387ed7f09f2ac8b3d357473e6be03--role-models.jpg',
    },
    year: 2021,
    title: '',
    review: 'Очень интересный фестиваль, Очень интересный фестиваль. Очень интересный фестиваль Очень интересный фестиваль'
  }
];

export default {
  title: 'UI/FeedbackPopup',
  component: FeedbackPopup,
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto', maxWidth: '840px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof FeedbackPopup>;

const Template: ComponentStory<typeof FeedbackPopup> = (args) => <FeedbackPopup {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: fakeData
};
Default.parameters = {
  layout: 'fullscreen'
};
