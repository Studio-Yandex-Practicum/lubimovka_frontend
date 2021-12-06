import { createContext } from 'react';

import { State } from 'components/library-filter/library-filter-reducer';

const CurrentFiltersContext = createContext<State>({ festival: [], program: [] });

export default CurrentFiltersContext;
