import { IPiecesFiltersProps } from 'pages/library';

const playfilters: IPiecesFiltersProps = {
  years: [
    {
      value: 2020,
      text: '2020',
    },

    {
      value: 2021,
      text: '2021',
    },

    {
      value: 2022,
      text: '2022',
    },

    {
      value: 2019,
      text: '2019',
    }
  ],
  programs: [
    {
      pk: 1,
      name: 'Шорт-лист'
    },
    {
      pk: 2,
      name: 'Внеконкурсная программа'
    },
    {
      pk: 3,
      name: 'fringe-программа'
    },
    {
      pk: 4,
      name: 'лонг-лист акции 7x7'
    },
    {
      pk: 5,
      name: 'Lark + Любимовка'
    },
  ],
  defaultState: {
    program: [],
    festival: []
  }
};

export default playfilters;
