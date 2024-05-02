'use client';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useRef } from 'react';
import LiveStream from '../Livestream';
import { HistoryDiceGameDetail } from '../HistoryDiceGameDetail';
import { HistoryDiceGame } from '../HistoryDiceGame';
import Image from 'next/image';

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
        <div className="flex-1 float-right">
          <Image
            alt="Image demo"
            src={
              'https://storage.googleapis.com/game-k-89a6b.appspot.com/image/1714668368729-Screenshot%202024-05-02%20234448.png?GoogleAccessId=firebase-adminsdk-a60i3%40game-k-89a6b.iam.gserviceaccount.com&Expires=16446992400&Signature=mwHIrSoGs5Hx75vGxtpM0xSwlUOBy3EC9g0myzjInpyAoVFhZ4iih9A63JzL0zSmAQSf2yYpDC96XJZ8WJ9PpMEOOsNPK%2B6sRCxJXLu0CfeAuzGLOYxZoAcuiGyZyrRZMSLdeq%2FYtWyj8xx3h5k4qwF4gi%2BNJkfahZAg19uwYXz2Sydh%2B39wojh9OVyQv06200OiI0LIbJLxiQIb92V0%2Fd3j0VrpSkPBaWP5%2FcofYpckXea184hgqnlhXvChRgJRUtd1BOlSiqLknOU8Slq7TyOg7ePibJn5ifPUKHUtEaxd8eYv%2FUnJVS5xYloksKy9mKFZqxTKSqmlbgPxaN3H8Q%3D%3D'
            }
            width={1146}
            height={163}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
}
