'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

const getMaxValue = (level: number) => {
  switch (level) {
    case 4:
    case 6:
      return 9757153; // 10 triệu
    case 5:
    case 7:
      return 1467382; // 1.5 triệu

    default:
      return 935781;
  }
};

const getIncrementValue = (level: number) => {
  switch (level) {
    case 4:
      return Math.random() > 0.5
        ? Math.floor(Math.random() * 874231)
        : Math.floor(Math.random() * 707835);
    case 6:
      return Math.random() > 0.5
        ? Math.floor(Math.random() * 945371)
        : Math.floor(Math.random() * 674399); // Tăng ngẫu nhiên tới 100k
    case 5:
    case 7:
      return Math.floor(Math.random() * 13543); // Tăng ngẫu nhiên tới 15k

    default:
      return Math.floor(Math.random() * 8749);
  }
};

interface TableItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement;
  ratio: string;
  isHighlight: boolean;
  curChip: number;
  positionAnswer: number;
  onBetSuccess: () => void;
  name?: string;
  image?: string;
  textColor?: string;
}
export function TableItemMobile({
  curChip,
  isHighlight,
  onBetSuccess,
  name,
  children,
  ratio,
  image,
  textColor,
}: TableItemProps): JSX.Element {
  return (
    <div className="w-full h-full">
      <div className={classNames('flex h-full border-r-[1px] border-b-[1px] border-[#bcbcbc]')}>
        <div className="flex-1 mx-2 m-auto">
          <div className="w-full relative text-center">
            {image ? (
              <Image
                alt="bet"
                src={image}
                height={24}
                width={80}
                className="h-[18px] object-contain mx-auto"
              />
            ) : (
              <h2 className={classNames('text-[26px] font-bold text-center', textColor)}>{name}</h2>
            )}
          </div>
          <span
            className={classNames(
              'block text-center text-[#4c8bd080] text-sm font-medium relative top-4'
            )}>
            {ratio}
          </span>
        </div>
      </div>
    </div>
  );
}
