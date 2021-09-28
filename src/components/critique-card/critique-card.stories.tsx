import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CritiqueCard } from './critique-card';

export default {
  title: 'Components/CritiqueCard',
  component: CritiqueCard,
} as ComponentMeta<typeof CritiqueCard>;

const Template: ComponentStory<typeof CritiqueCard> = (args) => <CritiqueCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/NewYorkTimes.svg/320px-NewYorkTimes.svg.png',
  text: '«Действие пьесы «Длань Господня» разворачивается в подвале провинциальной церкви в Техасе, где мать главного героя с группой добровольцев готовит кукольное представление. Ей отчаянно нужна эта работа, её муж недавно умер, оставив её с сыном-подростком в эмоциональной и финансовой яме. И вот жуткая тварь захватывает контроль над левой рукой её беспокойного Джейсона и принимается терроризировать его и всех вокруг. По мере накала страстей окружающие начинают подозревать, что рука одержима самим дьяволом, и пастор Грег предлагает прибегнуть к экзорцизму. Однако «Длань Господня» — это не ужастик, по крайней мере, природа зла тут вовсе не сверхъестественная. Чёрная комедия Аскинса о разделённой надвое душе человека ненавязчиво обнажает глубинные импульсы — сексуальные, саморазрушительные, агрессивные — которые притаились в каждом из нас».',
  href: 'https://lubimovka.ru/production/768-dlan-gospodnya',
};
