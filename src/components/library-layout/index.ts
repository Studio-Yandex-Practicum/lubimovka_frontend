import { LibraryLayout as Component } from './library-layout';
import { LibraryLayoutSlot } from './library-layout-slot';
import { LibraryLayoutFilterToggler } from './library-layout-filter-toggler';
import { LibraryLayoutSpinner } from './library-layout-spinner';

export const LibraryLayout = Object.assign(Component, {
  Slot: LibraryLayoutSlot,
  FilterToggler: LibraryLayoutFilterToggler,
  Spinner: LibraryLayoutSpinner,
});
