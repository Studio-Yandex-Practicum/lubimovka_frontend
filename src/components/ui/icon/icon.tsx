import { FC, SVGProps } from 'react';

import icons from 'shared/icons';

interface IIconProps extends SVGProps<SVGSVGElement> {
  glyph: keyof typeof icons,
}

export const Icon: FC<IIconProps> = (props) => {
  const {
    glyph,
    fill = 'currentColor',
    ...restIconProps
  } = props;
  const IconComponent = icons[glyph];

  return (
    <IconComponent
      fill={fill}
      focusable={false}
      aria-hidden
      {...restIconProps}
    />
  );
};
