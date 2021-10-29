import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CreatorsList } from './creators-list';

export default {
  title: 'Components/CreatorsList',
  component: CreatorsList,
} as ComponentMeta<typeof CreatorsList>;

const Template: ComponentStory<typeof CreatorsList> = (args) => <CreatorsList {...args}/>;
export const Default = Template.bind({});
Default.args = {
  playwrighter: 'Роберт Аскинс',
  translator: 'Оксана Алёшина',
  textAdaptation: 'Валерий Печейкин',
  director: 'Юрий Муравицкий',
  actors: ['Фёдор Кокорев', 'Коля Ноекёльн', 'Ксения Чекина', 'Александр Пронькин', 'Владимир Морозов', 'Светлана Маршанкина'],
};
