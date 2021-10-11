import { FC } from 'react';

// Компоненты
import { WhatWeDoSelection } from './what-we-do-selection';
import { WhatWeDoContacts } from './what-we-do-contacts';

// Использую компонент для сторибук
export const WhatWeDo: FC = (): JSX.Element => {
  return (
    // main
    <main>
      <WhatWeDoSelection />
      <WhatWeDoContacts />
    </main>
  );
};
