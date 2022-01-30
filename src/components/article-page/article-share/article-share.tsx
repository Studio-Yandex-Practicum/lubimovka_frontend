import React from 'react';
import cn from 'classnames/bind';

import { ShareLink } from '../../ui/share-link';
import { Team } from '../../../shared/types';

import styles from './article-share.module.css';

const cx = cn.bind(styles);

interface IArticleShare {
  isBlog: boolean;
  team?: Team[];
}

const ArticleShare: React.FC<IArticleShare> = (props) => {
  const {
    isBlog,
    team,
  } = props;

  return (
    <section className={cx('container', { newsContainer: !isBlog })}>
      {team &&
        <div className={cx('creators')}>
          {
            team.map((elem: Team, idx: number) => {
              return(
                <dl key={idx}>
                  <dt className={cx('label')}>{elem.name}</dt>
                  {
                    elem.persons.map((person: string) => {
                      return <dd key={person} className={cx('creator')}>{person}</dd>;
                    })
                  }
                </dl>
              );
            })
          }
        </div>}

      <div className={cx('share', { blogShare: isBlog, newsShare: !isBlog })}>
        <ShareLink className={cx('links')}/>
        <h4 className={cx('shareTitle')}>
          Поделиться <br/>{isBlog ? 'записью' : 'новостью'} в соцсетях</h4>
      </div>
    </section>
  );
};

export default ArticleShare;
