import PlayProposalLayoutColumn from './column/play-proposal-layout-column';
import PlayProposalForm from './form/play-proposal-layout-form';
import { PlayProposalLayout as BaseComponent } from './play-proposal-layout';

const PlayProposalLayout = Object.assign(BaseComponent, {
  Column: PlayProposalLayoutColumn,
  Form: PlayProposalForm,
});

export default PlayProposalLayout;
