'use client';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useRef } from 'react';
import LiveStream from '../Livestream';
import { useAppSelector } from '@/lib';

const cx = classNames.bind(styles);
type Props = {
  gameDiceId: number;
};

export default function XocDiaDetailsView({ gameDiceId }: Props) {
  const { dataDiceDetail } = useAppSelector((state) => state.diceDetail);
  let dataDiceDetailById = dataDiceDetail.find((d) => d.gameDiceId == gameDiceId);

  const elementTest = useRef<HTMLElement>(null);

  if (elementTest.current) {
    elementTest.current.click();
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('controller')}>
        <LiveStream src="https:live.vk169.net/hls/test1.m3u8" gameDiceId={gameDiceId} />
      </div>
      {/* <XocDiaResultsChat /> */}
    </div>
  );
}
