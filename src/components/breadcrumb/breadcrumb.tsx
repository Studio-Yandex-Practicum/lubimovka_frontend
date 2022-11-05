import Link from 'next/link';

import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';

interface BreadcrumbProps {
  text: string,
  path: string,
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { text, path } = props;

  return (
    <Link
      href={path}
      passHref
    >
      <Button
        border="right-bottom"
        size="s"
        upperCase
        icon={(
          <Icon
            glyph="arrow-left"
            width="100%"
            height="100%"
          />
        )}
        iconPosition="right"
      >
        {text}
      </Button>
    </Link>
  );
};
