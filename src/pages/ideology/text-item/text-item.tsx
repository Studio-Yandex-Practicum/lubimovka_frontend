import { FC, ReactNode } from 'react';
import cn from 'classnames';

interface TextItemProps {
  number: '1.1' | '1.2' | '1.3' | '2.1' | '2.2' | '2.3';
  title: string
  children: ReactNode
}

const TextItem: FC<TextItemProps> = (props) => {
  const { number, title, children } = props;

  return (
    <>
      <p>{number}</p>
      <h4>{title}</h4>
      <p>{children}</p>
    </>
  );
};

export default TextItem;
