'use client';

import classNames from 'classnames/bind';
import { LiveStreamBaccarat } from '../LiveStreamBaccarat';
import { ChatLive } from '../ChatLive';
import { GoodRoad } from '../GoodRoad';

const cx = classNames.bind({});

export function BaccaratDetailView(): JSX.Element {
  return (
    <div className={cx('relative')}>
      <div className={cx('h-[calc(87vh-4px)]')}>
        <LiveStreamBaccarat />
      </div>
      <div className={cx('flex absolute left-0 right-0 bottom-[-58px]')}>
        {/* <HistoryDiceGameDetail gameDiceId={gameDiceId} />
    <HistoryDiceGame gameDiceId={gameDiceId} />
    <EvenOddResultLive gameDiceId={gameDiceId} />
    <DiceResultTXLive gameDiceId={gameDiceId} /> */}
        <GoodRoad />
        <div className="flex-1">
          {/* <iframe src={diceGameById?.idChat} className="h-full w-full"></iframe> */}
          <ChatLive />
        </div>
      </div>
    </div>
  );
}
