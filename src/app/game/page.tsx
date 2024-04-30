'use client';

import Link from 'next/link';
import { XocDiaSlider } from './components/DiceSlider';
import { XocDiaItem } from './components/DiceItemV1';
import { useDiceGame } from './ultils/handleGame';

export default function GamePage(): JSX.Element {
  const { data } = useDiceGame();

  return (
    <div className="w-full">
      <XocDiaSlider />
      <div
        className="wrapper-games"
        style={{
          paddingTop: 10,
          paddingRight: 44,
          paddingLeft: 8,
        }}>
        <div className="grid grid-cols-3 gap-4">
          {data.map((item, index) => (
            <Link href={`${item.id}`} key={index}>
              <XocDiaItem key={index} {...item} onClick={() => {}} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
