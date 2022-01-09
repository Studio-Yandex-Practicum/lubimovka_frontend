import { Partner } from 'api-typings';

import fondProhorovaLogo from '../assets/partners/fond-prohorova.png';
import sbtgLogo from '../assets/partners/sbtg.png';

const partners: Partner[] = [
  {
    id: 1,
    name: 'Фонд Михаила Прохорова',
    url: '',
    image: fondProhorovaLogo.src,
    type: 'general',
    in_footer_partner: true,
  },
  {
    id: 2,
    name: 'SBTG',
    url: '',
    image: sbtgLogo.src,
    type: 'general',
    in_footer_partner: false,
  },
];

export default partners;
