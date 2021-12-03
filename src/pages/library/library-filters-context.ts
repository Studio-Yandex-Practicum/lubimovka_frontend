import { createContext } from 'react';

import { State } from 'components/library-filter/library-filter-reducer';

const CurrentFiltersContext = createContext<State>({ years: [], programmes: [] });

export default CurrentFiltersContext;
