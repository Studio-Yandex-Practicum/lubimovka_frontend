import type { FC } from 'react';

export const PageHeadBanner: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <div>
      {children}
    </div>
  );
};
