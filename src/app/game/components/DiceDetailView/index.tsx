'use client';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useRef } from 'react';
import LiveStream from '../Livestream';
import { HistoryDiceGameDetail } from '../HistoryDiceGameDetail';
import { HistoryDiceGame } from '../HistoryDiceGame';
import Image from 'next/image';
import { EvenOddResultLive } from '../EvenOddResultLive';
import { DiceResultTX } from '../DiceResultTX';
import { GoodRoad } from '../GoodRoad';
import { ChatLive } from '../ChatLive';

const cx = classNames.bind(styles);
type Props = {
  gameDiceId: number;
};

export default function XocDiaDetailsView({ gameDiceId }: Props) {
  const elementTest = useRef<HTMLElement>(null);

  if (elementTest.current) {
    elementTest.current.click();
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('controller')}>
        <LiveStream src="https:live.vk169.net/hls/test1.m3u8" gameDiceId={gameDiceId} />
      </div>
      <div className="flex">
        <HistoryDiceGameDetail />
        <HistoryDiceGame />
        <EvenOddResultLive />
        <DiceResultTX />
        <GoodRoad />
        <ChatLive />
      </div>
    </div>
  );
}
