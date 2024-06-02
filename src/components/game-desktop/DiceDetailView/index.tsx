'use client';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useRef } from 'react';
import LiveStream from '../Livestream';
import { HistoryDiceGame } from '../HistoryDiceGame';
import Image from 'next/image';
import { GoodRoad } from '../GoodRoad';
import { useAppSelector } from '@/lib';
import { HistoryDiceGameDetail } from '@/components/game/HistoryDiceGameDetail';
import { EvenOddResultLive } from '@/components/game/EvenOddResultLive';
import { DiceResultTXLive } from '@/components/game/DiceResultTXLive';
import { ChatLive } from '../ChatLive';

const cx = classNames.bind(styles);
type Props = {
  gameDiceId: number;
};

export default function XocDiaDetailsView({ gameDiceId }: Props) {
  const { diceGame } = useAppSelector((state) => state.diceGame);
  const diceGameById = diceGame.find((d) => d.id === gameDiceId);

  return (
    <div className={cx('wrapper', 'relative')}>
      <div className={cx('controller')}>
        <LiveStream src="https:live.vk169.net/hls/test1.m3u8" gameDiceId={gameDiceId} />
      </div>
      <div className={cx('result__list', 'flex')}>
        <HistoryDiceGameDetail gameDiceId={gameDiceId} />
        <HistoryDiceGame gameDiceId={gameDiceId} />
        <EvenOddResultLive gameDiceId={gameDiceId} />
        <DiceResultTXLive gameDiceId={gameDiceId} />
        <GoodRoad />
        <div className="flex-1">
          {/* <iframe src={diceGameById?.idChat} className="h-full w-full"></iframe> */}
          <ChatLive />
        </div>
      </div>
    </div>
  );
}
