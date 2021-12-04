import { ReactNode } from 'react';

interface IPageProps {
  children: ReactNode,
}

const Page = (props: IPageProps): JSX.Element => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

export default Page;
