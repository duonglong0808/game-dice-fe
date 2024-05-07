'use client';

import React, { forwardRef, HTMLAttributes, useCallback } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { ICheckHover, StatusDiceDetail } from '@/constants';
import { useAppSelector } from '@/lib';

const cx = classNames.bind(styles);
interface TableItemProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
  ratio: number;
  isHighlight: boolean;
  onHover?: (iCheckHover: ICheckHover) => void;
  points?: number;
  name?: string;
  numberPlayer?: number;
  isLeft?: boolean;
}

const TableItem = forwardRef<HTMLDivElement, TableItemProps>(
  (
    { children, name, className, points, ratio, onHover, isLeft, isHighlight, ...otherProps },
    ref
  ) => {
    const { gameDiceId } = useAppSelector((state) => state.diceGame);
    const { dataDiceDetail } = useAppSelector((state) => state.diceDetail);
    let dataDiceDetailById = dataDiceDetail.find((d) => d.gameDiceId == gameDiceId);
    const statusDice =
      typeof dataDiceDetailById?.status == 'string'
        ? dataDiceDetailById?.status?.split(':')[0]
        : dataDiceDetailById?.status;

    const handleHover = useCallback(
      (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onHover &&
          onHover({
            isHover: true,
            position: {
              x: event.clientX,
              y: event.clientY,
            },
          });
      },
      [onHover]
    );
    const handleHoverLeft = useCallback(
      (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onHover &&
          onHover({
            isHover: false,
            position: {
              x: 0,
              y: 0,
            },
          });
      },
      [onHover]
    );

    return (
      <div
        className={`${className} ${cx('table__item', {
          // 'table__item--active': true,
          'table__item--active': statusDice == StatusDiceDetail.bet,
          'table__item--correct': isHighlight,
        })}`}
        ref={ref}
        {...otherProps}>
        {name === undefined && points !== undefined ? (
          <div className={cx('dots')}>
            {points !== -1 ? (
              Array.from({ length: 4 }, (_, index) => index + 1).map((n) => (
                <span key={n} className={cx(`dots__item${n > 4 - points ? '--red' : ''}`)}>
                  {n == 4 && points}
                </span>
              ))
            ) : (
              <div className="flex  gap-2 flex-row">
                <div className="flex gap-1">
                  {Array.from({ length: 4 }, (_, index) => index + 1).map((n) => (
                    <span key={n} className={cx('dots__item', 'dots__item--multi')} />
                  ))}
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 4 }, (_, index) => index + 1).map((n) => (
                    <span key={n} className={cx('dots__item--red', 'dots__item--multi')} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className={cx('table__item__name')}>{name}</p>
        )}
        <div className={cx('table__item__ratio')}>
          1<span>:</span>
          {ratio}
        </div>
        <div className={cx('table__item__points')}>
          <div className={cx('table__item__points--icon')}></div>
          {children}
        </div>
        <div className={cx('total__point-bet')}></div>
        {onHover &&
          (isLeft ? (
            <div
              className={cx('table__item__tool_tip')}
              style={{
                right: 0,

                borderLeftWidth: 30,
                borderLeftStyle: 'solid',
                borderLeftColor: 'transparent',
              }}>
              <button
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverLeft}
                style={{
                  left: -20,
                }}>
                ?
              </button>
            </div>
          ) : (
            <div
              className={cx('table__item__tool_tip')}
              style={{
                left: 0,
                borderRightWidth: 30,
                borderRightStyle: 'solid',
                borderRightColor: 'transparent',
              }}>
              <button onMouseEnter={handleHover} onMouseLeave={handleHoverLeft}>
                ?
              </button>
            </div>
          ))}
      </div>
    );
  }
);

export default TableItem;
