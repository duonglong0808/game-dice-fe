'use client';

import React, { forwardRef, HTMLAttributes, useCallback, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import type { SVGProps } from 'react';
import { ICheckHover } from '@/constants';

const cx = classNames.bind(styles);

export function StreamlineBall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 14 14" {...props}>
      <g fill="none" stroke="#ffe66b" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0-13v13"></path>
        <path d="M2.1 11.27a5 5 0 0 0 0-8.54m9.8 0a5 5 0 0 0 0 8.54"></path>
      </g>
    </svg>
  );
}
interface TableItemProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
  ratio: number;
  onHover?: (iCheckHover: ICheckHover) => void;
  points?: number;
  name?: string;
  numberPlayer?: number;
  isLeft?: boolean;
}

const TableItem = forwardRef<HTMLDivElement, TableItemProps>(
  ({ children, name, className, points, ratio, onHover, isLeft, ...otherProps }, ref) => {
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
      <div className={`${className} ${cx('table__item')}`} ref={ref} {...otherProps}>
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
        <div className={cx('table__item__ratio')}>{`1:${ratio}`}</div>
        {/* {children} */}
        <div className={cx('table__item__points')}>
          <div className={cx('table__item__points--icon')}></div>
          {children}
        </div>
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
