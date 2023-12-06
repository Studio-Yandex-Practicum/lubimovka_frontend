import classNames from 'classnames/bind';

import styles from './html-markup.module.css';

type HTMLMarkupProps = {
  variant?: 'default' | 'centered'
  className?: string
} & ({
  children: React.ReactNode
  markup?: never
} | {
  children?: never
  markup: string
})

const cx = classNames.bind(styles);

export const HTMLMarkup = (props: HTMLMarkupProps) => {
  const {
    children,
    variant = 'default',
    markup,
    className,
  } = props;

  return (
    <div
      className={cx(
        variant,
        className
      )}
      {...markup && !children ? {
        dangerouslySetInnerHTML: {
          __html: markup,
        }
      } : {}}
    >
      {children}
    </div>
  );
};
