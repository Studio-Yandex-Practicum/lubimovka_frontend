import classNames from 'classnames/bind';

import { Section } from 'components/section';
import { Menu } from 'components/ui/menu';

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

  return (
    <Section
      type="volunteers"
      {...restSectionProps}
    >
      <Menu type="years">
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
