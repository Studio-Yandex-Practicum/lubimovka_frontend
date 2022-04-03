import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HTMLMarkup } from './html-markup';

const DEMO_TEXT = `
  <big>
    «Любимовка - 2020»: 39 пьес, трансляции, большая образовательная программа, философы в роли режиссеров и еще одна площадка
  </big>
  <p>
    С 5 сентября по 12 сентября в Москве на Площадке 8/3, в Центре Вознесенского и впервые в формате онлайн-трансляций пройдет фестиваль современной драматургии «Любимовка». В течение недели здесь представят лучшие новые пьесы, написанные на русском языке авторами со всего мира: 24 работы в основной программе, 8 — в Fringe (в постановке философов и исследователей, среди которых Виктор Вахштайн, Олег Аронсон и Александр Писарев), 6 текстов состоявшихся драматургов в off. Все 39 пьес будут представлены в форме сценических читок, после каждой новая арт-дирекция по традиции фестиваля будет проводить обсуждение. Кроме практически непрекращающихся читок  — большая образовательная программа с мастер-классами Кирилла Серебренникова, Михаила Дурненкова, Евгения Казачкова, Ильмиры Болотян, Марины Андрейкиной и Родиона Белецкого.
  </p>
  <p>
    Полное расписание фестиваля опубликовано на сайте «Любимовки».
  </p>
  <h3>
    Новая арт-дирекция
  </h3>
  <p>
    В этом году фестиваль проводит новая арт-дирекция.
  </p>
  <p>
    С 2013 до 2019 года арт-директорами «Любимовки» были театральный критик, журналист Анна Банасюкевич, драматурги, сценаристы и преподаватели Михаил Дурненков и Евгений Казачков. В новой команде с этого года: режиссер Юрий Шехватов, драматурги Мария Огнева, Олжас Жанайдаров, Нина Беленицкая, Полина Бородина, Андрей Иванов и театровед Полина Пхор.
  </p>
  <p>
    «Предыдущее поколение “худсовета” "Любимовки" не отходит от дел полностью. Душой, сердцем, мозгом и руками мы остаемся с фестивалем. Будем курировать спецпроекты, преподавать, вести обсуждения, помогать нашей смене и говорить из облака: "Симба! Помни, ты должен поддерживать молодых драматургов, искать новые голоса и делать театр живым и современным!"», — комментировала прошлая команда арт-директоров фестиваля.
  </p>
  <h3>
    Оффлайн и трансляции
  </h3>
  <p>
    «Любимовка» известна полными залами. Каждый год регистрация на режиссерские читки закрывается меньше, чем за полчаса, а толпа на входе из желающих попасть на события на любые свободные места растет с каждым годом. Но в связи с эпидемиологической ситуацией попасть на читки офлайн в этом году будет, к сожалению, труднее обычного — количество зрителей в зале «Любимовка» вынуждена ограничить на 50%.
  </p>
  <p>
    Однако впервые появится возможность увидеть все в режиме реального времени. Live-трансляция, организованная партнером фестиваля, командой sbtg.ru, будет вестись с событий на YouTube-канале «Любимовки». Традиционно видеозаписи читок и последующих обсуждений с участниками, авторами, зрителями и профессионалами театра «Любимовка» публиковала на своем YouTube-канале, но спустя несколько недель после окончания фестиваля. В этот раз смонтированные видео будут доступны гораздо быстрее.
  </p>
  <p>
    «С учетом участников-драматургов, ридеров, режиссеров, актеров и организаторов, по нашим оптимистичным подсчетам на каждой читке для зрителей будет оставаться около 10 свободных мест. Это очень мало, но это все, что возможно сделать в существующих условиях. Команда sbtg.ru согласилась нас поддержать и организовать трансляции в прямом эфире с каждой читки. Это большой объем, но это позволит нам все-таки представить пьесы и главное подключить к их обсуждению значительно большую аудиторию, чем в этом году может вместить наш зал», — говорит Юрий Шехватов, арт-директор фестиваля.
  </p>
  <p>
    Регистрация на читки оффлайн будет открыта ровно за сутки до начала. Ссылка, как и в прошлые годы, будет появляться на странице с расписанием ровно в полдень. Вход на все события свободный. Регистрации для просмотра трансляции и онлайн-участия в обсуждении пьес нет.
  </p>
  <h3>
    В программу «Любимовки-2020» вошли:
  </h3>
  <ul>
    <li>
      «Цикл индекса» Екатерины Августеняк (Санкт-Петербург) — серия наблюдений о том, как все неустойчиво развивается;
    </li>
    <li>
      «Страна Вась» Викентия Брызя (Владивосток) — пьеса-поэма, исследующая массовое бессознательное жителей Приморья;
    </li>
    <li>
      «Я танцую как дебил» Игоря Витренко (Рязань) — история обыкновенного мужика, который бросает глупости и начинает заниматься делом: мастерит модельки машин;
    </li>
    <li>
      «Дыры» Лидии Головановой (Санкт-Петербург) — незначительный разговор о деньгах и космосе, благодаря которому раскрывается жизнь;
    </li>
    <li>
      «deinosдина» Даниила Гурского (Санкт-Петербург) — трип внутрь сознания, где скрываются чудовища, так похожие на нас самих;
    </li>
    <li>
      «Республика» Сергея Давыдова (Самара) — воспоминание в стихах о гражданской войне в Таджикистане и разрушении Вавилонской башни;
    </li>
  </ul>
`;

const Template: ComponentStory<typeof HTMLMarkup> = (args) => <HTMLMarkup {...args}/>;

export const Default = Template.bind({});
Default.args = {
  markup: DEMO_TEXT,
};

export default {
  title: 'Components/HTMLMarkup',
  component: HTMLMarkup,
} as ComponentMeta<typeof HTMLMarkup>;
