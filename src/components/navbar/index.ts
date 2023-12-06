import { Navbar as Component } from './navbar';
import { NavbarActionsSlot } from './navbar-actions-slot';
import { NavbarSlot } from './navbar-slot';

export const Navbar = Object.assign(Component, {
  Slot: NavbarSlot,
  ActionsSlot: NavbarActionsSlot,
});

export type { NavbarProps } from './navbar';
