import { Navbar as Component } from './navbar';
import { NavbarSlot } from './navbar-slot';
import { NavbarActionsSlot } from './navbar-actions-slot';

export const Navbar = Object.assign(Component, {
  Slot: NavbarSlot,
  ActionsSlot: NavbarActionsSlot,
});

export type { NavbarProps } from './navbar';
