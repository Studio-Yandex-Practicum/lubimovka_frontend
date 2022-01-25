import { createContext } from 'react';

import { State } from 'components/library-filter/library-filter-reducer';

export const LibraryFiltersProviderContext = createContext<State>({ festival: [], program: [] });
