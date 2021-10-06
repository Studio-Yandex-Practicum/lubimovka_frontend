import { FC } from 'react';

// Компоненты
import { WhatWeDoHeader } from './what-we-do-header';
import { WhatWeDoDesc } from './what-we-do-desc';
import { WhatWeDoAuthors } from './what-we-do-authors';
import { WhatWeDoSelection } from './what-we-do-selection';
import { WhatWeDoContacts } from './what-we-do-contacts';

// Использую компонент для сторибук
export const WhatWeDo: FC = (): JSX.Element => {
  return (
    // main
    <main>
      <WhatWeDoHeader />
      <WhatWeDoDesc />
      <WhatWeDoAuthors />
      <WhatWeDoSelection />
      <WhatWeDoContacts />
    </main>
  );
};
