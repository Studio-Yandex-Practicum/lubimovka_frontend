import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import { useCard } from 'services/api/use-card';

interface BreadcrumbProps {
  text: string
  path: string
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { text, path } = props;
  const [, setCard] = useCard();
  const router = useRouter();

  useEffect(()=>{
    setCard(router.asPath);
  },[]);

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
