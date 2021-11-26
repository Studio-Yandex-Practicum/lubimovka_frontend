import { ComponentType } from 'react';

import { useAppSettings } from '../app.context';
import { AppSettingsContext } from '../app.context';

export type WithAppSettingsProps = AppSettingsContext;

export const withAppSettings = <P extends WithAppSettingsProps>(Component: ComponentType<P>) => {
  const WrappedComponent: ComponentType<Omit<P, keyof WithAppSettingsProps>> = (props) => {
    const settings = useAppSettings();
    const combineProps = { ...settings, ...props as P };

    return <Component {...combineProps}/>;
  };

  WrappedComponent.displayName = `withAppSettings(${Component.displayName || Component.name}`;

  return WrappedComponent;
};
