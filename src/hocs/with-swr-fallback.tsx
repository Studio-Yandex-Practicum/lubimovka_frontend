import { SWRConfig } from 'swr';

export const withSWRFallback = <P extends object>(Component: React.ComponentType<Omit<P, 'fallback'>>) => {
  const WithSWRFallback: React.ComponentType<P & { fallback: object }> = ({ fallback, ...props }) => (
    <SWRConfig
      value={{
        fallback
      }}
    >
      <Component {...props}/>
    </SWRConfig>
  );

  WithSWRFallback.displayName = `withSwrFallback(${Component.displayName || Component.name}`;

  return WithSWRFallback;
};
