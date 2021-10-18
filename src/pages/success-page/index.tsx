import { NextPage } from 'next';
import { PlayProposalSuccess } from 'components/play-proposal-success';
import titleData from './assets/mock-title-success-data.json';
import demoItems from './assets/mock-header-success-data.json';

import { Menu } from 'components/ui/menu';
import { Logotype } from 'components/logotype';
import { Button } from 'components/ui/button';


const SuccessPage: NextPage = () => (
  <>
    <header>
      <Logotype href="/"></Logotype>
      <Menu type="main-navigation">
        {demoItems[0].map((item) => (
          <Menu.Item key={item.text} href={item.href}>
            {item.text}
          </Menu.Item>
        ))}
        {demoItems[1].map((item) => (
          <Menu.Item key={item.text} href={item.href}>
            {item.text}
          </Menu.Item>
        ))}
      </Menu>
      <Button
        label="Поддержать"
        view="primary"
        icon="plus"
        iconPlace="left"
        isLink={false}
        align="center"
        width="165px"
        size= 'l'
        border= 'bottomLeft'
      ></Button>
    </header>

    <PlayProposalSuccess title={titleData.title} />
  </>
);

export default SuccessPage;
