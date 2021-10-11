import { FC } from 'react';

// Компоненты
import { WhatWeDoContacts } from './what-we-do-contacts';

// Использую компонент для сторибук
export const WhatWeDo: FC = (): JSX.Element => {
  return (
    // main
    <main>
      <WhatWeDoContacts />
    </main>
  );
};
