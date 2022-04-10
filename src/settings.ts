import { addBaseUrlToPath } from 'shared/helpers/url';

const settings = {
  defaultMeta: {
    title: 'Любимовка',
    description: 'Фестиваль молодой драматургии Любимовка — это независимый некоммерческий коллективный проект российских драматургов',
    image: addBaseUrlToPath('/open-graph-image.jpg'),
  }
};

export default settings;
