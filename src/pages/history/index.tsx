import { NextPage } from 'next';

import AppLayout from 'components/app-layout/index';
import { HistoryPage } from 'components/history-page';

interface IHistoryProps {
  metaTitle: string;
}
const History: NextPage<IHistoryProps> = (props: IHistoryProps) => {
  const {
    metaTitle,
  } = props;
  return (
    <AppLayout>
      <HistoryPage metaTitle={metaTitle}/>
    </AppLayout>
  );
};

export default History;
