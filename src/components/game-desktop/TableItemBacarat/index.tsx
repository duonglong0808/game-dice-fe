import classNames from 'classnames/bind';
import { HTMLAttributes, useEffect, useState } from 'react';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface TableItemProps extends HTMLAttributes<HTMLDivElement> {
  isPlayer?: boolean;
  children?: React.ReactElement;
  ratio?: number;
  isHighlight?: boolean;
  curChip?: number;
  positionAnswer?: number;
  betConfirmOld?: number;
  points?: number;
  name?: string;
  numberPlayer?: number;
  isLeft?: boolean;
}

export function TableItemBaccarat({ className, isPlayer = false }: TableItemProps): JSX.Element {
  return (
    <div className={`${className} flex justify-center items-center mb-1 `}>
      {isPlayer ? (
        <div
          id="myDiv"
          className={cx('w-[100%] h-[100%] relative top-[0%]', 'parabol', {
            'hover:after:bg-[#5fa8df8e]': 1,
            'hover:after:cursor-pointer': 1,
          })}></div>
      ) : (
        <div
          className={`${cx(
            'border-[1px] border-[transparent] w-[calc(100%-2px)] h-[100%] relative top-[-0%] right-[1%] left-[0%]',
            {
              'hover:bg-[#5fa8df8e]': 1,
              'hover:cursor-pointer': 1,
            }
          )}`}></div>
      )}
    </div>
  );
}
