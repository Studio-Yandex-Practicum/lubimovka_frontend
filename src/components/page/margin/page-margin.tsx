import { FC } from 'react';

export const PageMargin: FC = (props) => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};
