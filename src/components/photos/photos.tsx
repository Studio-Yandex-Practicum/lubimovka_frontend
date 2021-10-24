import {FC, HTMLAttributes} from 'react';
import cn from 'classnames/bind';
import { Url } from 'shared/types/common';


import styles from './photos.module.css';
import mockData from './assets/mock-data.json';

const cx = cn.bind(styles);

interface IPhotosProps extends HTMLAttributes<HTMLElement> {
  data?: [
    {
      id: number;
      image: Url;
      description: string;
    },
  ];
}

export const Photos: FC<IPhotosProps> = ({ data = mockData }) => {
  return (
    <div className={cx('photos')}>
      {data.map((photo) => (
        <img src={photo.image} key={photo.id} className={cx('photos-item')} alt={photo.description} />
      ))}
    </div>
  );
};
