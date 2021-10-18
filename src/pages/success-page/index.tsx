import { NextPage } from 'next';
import { PlayProposalSuccess } from 'components/play-proposal-success';
import titleData from './assets/mock-title-success-data.json';
const SuccessPage: NextPage = () => <PlayProposalSuccess title={titleData.title} />;

export default SuccessPage;
