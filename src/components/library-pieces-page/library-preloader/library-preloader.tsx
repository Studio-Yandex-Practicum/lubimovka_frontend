import { FC } from 'react';
import Image from 'next/dist/client/image';

import Loader from './loader.gif';

const LibraryPreloader: FC = () => {
  return (
    <Image src={Loader} alt="Прелоадер"/>
  );
};

export default LibraryPreloader;
