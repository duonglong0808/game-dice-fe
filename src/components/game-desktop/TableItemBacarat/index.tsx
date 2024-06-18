import classNames from 'classnames/bind';
import { HTMLAttributes, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { StatusBaccarat } from '@/constants';

const cx = classNames.bind(styles);

interface TableItemProps extends HTMLAttributes<HTMLDivElement> {
  isHighlight: boolean;
  statusBaccarat: number;
  isPlayer?: boolean;
  children?: React.ReactElement;
  curChip?: number;
  positionAnswer?: number;
  betConfirmOld?: number;
  points?: number;
  name?: string;
  numberPlayer?: number;
  isLeft?: boolean;
}

export function TableItemBaccarat({
  className,
  isPlayer = false,
  isHighlight,
  statusBaccarat,
}: TableItemProps): JSX.Element {
  return (
    <div className={`${className} flex justify-center items-center mb-1 `}>
      {isPlayer ? (
        <div
          id="myDiv"
          className={cx('w-[100%] h-[100%] relative top-[0%]', 'parabol', {
            'hover:after:bg-[#5fa8df8e] hover:after:cursor-pointer':
              statusBaccarat == statusBaccarat,
            'item-table__active--player': isHighlight,
          })}></div>
      ) : (
        <div
          className={`${cx(
            'border-[1px] border-[transparent] w-[calc(100%-2px)] h-[100%] relative top-[-0%] right-[1%] left-[0%]',
            {
              'hover:bg-[#5fa8df8e] hover:cursor-pointer': statusBaccarat == statusBaccarat,
              'item-table__active': isHighlight,
            }
          )}`}></div>
      )}
    </div>
  );
}
