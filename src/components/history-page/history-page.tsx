import { FC, useEffect } from 'react';

import { HistoryHeader } from './header';
import { HistoryTitle } from './title';
import { HistoryItself } from './itself';
import { Festival, Years } from 'api-typings';

import itselfData from './assets/mock-data-itself.json';
import { useRouter } from 'next/router';

interface IHistoryPage {
  years: Years,
  titleCounts: Festival,
  defaultYear?: number,
}

export const HistoryPage: FC<IHistoryPage> = ({ years, titleCounts, defaultYear }) => {
  const router = useRouter();
  useEffect(() => {
    if (!defaultYear) {
      const year = years.years[0];
      router.replace(`${router.pathname}/${encodeURI(`?festival=${year}`)}`, undefined, { shallow: true, scroll: false });
    } else {
    }
  }, []);

  function selectYear(year: number) {
    if (year) {
      router.push(`${router.pathname}/${encodeURI(`?festival=${year}`)}`, undefined, { shallow: false, scroll: true });
    }
  }
  return (
    <>
      <HistoryHeader data={years} selectYear={selectYear} currentYear={defaultYear || years.years[0]}/>
      <HistoryTitle data={titleCounts} currentYear={defaultYear || years.years[0]}/>
      <HistoryItself data={itselfData}/>
    </>
  );
};
