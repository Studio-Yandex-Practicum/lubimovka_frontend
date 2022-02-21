import { FC } from 'react';
import Image from 'next/dist/client/image';

import Loader from './loader.gif';

const LibraryPreloader: FC = () => {
  return (
    <Image width={59} height={56} src={Loader} alt="Прелоадер"/>
  );
};

export default LibraryPreloader;
