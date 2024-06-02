'use client';

import { useAppDispatch, useAppSelector } from '@/lib';
import XocDiaDetailsView from '@/components/game-desktop/DiceDetailView';
import { SliderHome } from '@/components/game-desktop/DiceSlider';
import { useSearchParams } from 'next/navigation';
import { DicesHome } from '@/components/game-desktop/DicesHome';
import { GameMainTain } from '@/components/game/GameMaintain';

export default function GamePage(): JSX.Element {
  const { gameDiceId } = useAppSelector((state) => state.diceGame);
  const searchParams = useSearchParams();
  const game = searchParams.get('game') || 'dice';
  console.log('🚀 ~ GamePage ~ game:', game);

  return (
    <div className="w-full">
      {gameDiceId ? (
        <XocDiaDetailsView gameDiceId={gameDiceId} />
      ) : (
        <>
          <SliderHome />
          <div
            className="wrapper-games"
            style={{
              paddingTop: 10,
              paddingRight: 44,
              paddingLeft: 8,
            }}>
            <div className="grid grid-cols-3 gap-4">
              {/*  */}
              {game === 'dice' ? <DicesHome /> : <GameMainTain />}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
