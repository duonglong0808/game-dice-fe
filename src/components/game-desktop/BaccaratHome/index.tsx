'use client';

import { useAppDispatch } from '@/lib';
import { BaccaratItem } from '../BaccaratItem';
import { useBaccaratGame } from '@/ultils/handleHomeBaccarat';
import { setGameBaccaratId } from '@/lib/redux/app/baccaratGame.slice';

export function BaccaratHome(): JSX.Element {
  const dispatch = useAppDispatch();
  const { data } = useBaccaratGame();

  return (
    <>
      {data.map((baccarat, index) => {
        return (
          <div
            onClick={() =>
              dispatch(
                setGameBaccaratId({ id: index < 2 ? baccarat.id : data[index % 2 == 0 ? 0 : 1].id })
              )
            }
            key={index}>
            <BaccaratItem key={index} {...baccarat} />
          </div>
        );
      })}
    </>
  );
}
