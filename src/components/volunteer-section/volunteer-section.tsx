import classNames from 'classnames/bind';

import { Section } from 'components/section';
import { Menu } from 'components/ui/menu';
import { useHorizontalScroll } from 'shared/hooks/use-horizontal-scroll';

import type { SectionProps } from 'components/section';

import styles from './volunteer-section.module.css';

interface VolunteerSectionProps extends Omit<SectionProps, 'type'> {
  festivalYears: number[]
  selectedFestivalYear: number
  onFestivalYearSelect: (y: number) => void
}

const cx = classNames.bind(styles);

export const VolunteerSection: React.FC<VolunteerSectionProps> = (props) => {
  const {
    festivalYears,
    selectedFestivalYear,
    onFestivalYearSelect,
    children,
    ...restSectionProps
  } = props;

  const menuRef = useHorizontalScroll<HTMLUListElement>();

  return (
    <Section
      type="volunteers"
      {...restSectionProps}
    >
      <Menu
        type="years"
        ref={menuRef}
      >
        {festivalYears.map((year) => (
          <Menu.Item
            key={year}
            current={year === selectedFestivalYear}
            onClick={() => onFestivalYearSelect(year)}
          >
            {year}
          </Menu.Item>
        ))}
      </Menu>
      <div className={cx('inner')}>
        {children}
      </div>
    </Section>
  );
};
