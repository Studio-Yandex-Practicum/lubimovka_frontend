import { useEffect } from 'react';

import { HistoryHeader } from './header';
import { HistoryTitle } from './title';
import { HistoryItself } from './itself';

import itselfData from './assets/mock-data-itself.json';
import { useRouter } from 'next/router';

import type { VFC } from 'react';
import type { Festival } from 'api-typings';

interface HistoryPage {
  years: number[],
  titleCounts: Festival,
  defaultYear?: number,
}

export const HistoryPage: VFC<HistoryPage> = ({ years, titleCounts, defaultYear }) => {
  const router = useRouter();
  const [year] = years;

  useEffect(() => {
    if (!defaultYear) {
      router.replace(`${router.pathname}/${encodeURI(`?festival=${year}`)}`, undefined, { shallow: true, scroll: false });
    } else {
    }
  }, []);

  function selectYear(year: number) {
    router.push(`/history/${year}`, undefined, { scroll: true });
  }

  return (
    <>
      <HistoryHeader
        years={years}
        selectYear={selectYear}
        currentYear={defaultYear || year}
      />
      <HistoryTitle
        data={titleCounts}
        currentYear={defaultYear || year}
      />
      <HistoryItself data={itselfData}/>
    </>
  );
};
