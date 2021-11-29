import { Button } from 'components/ui/button';

interface IBreadcrumbProps {
  text: string,
  path: string,
}

export const Breadcrumb = (props: IBreadcrumbProps): JSX.Element => {
  const { text, path } = props;

  return (
    <Button
      label={text}
      href={path}
      isLink
      icon="arrow-left"
      iconPlace="right"
      border="bottomRight"
    />
  );
};
