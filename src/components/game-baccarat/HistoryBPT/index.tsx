'use client';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

export function HistoryBPT({ baccaratId }: { baccaratId: number }): JSX.Element {
  const [dataPosition, setDataPosition] = useState<any>({
    11: {
      value: 'P',
    },
    12: {
      value: 'P',
    },
    13: {
      value: 'T',
    },
    14: {
      value: 'T',
    },
    21: {
      value: 'P',
    },
    22: {
      value: 'P',
    },
    23: {
      value: 'B',
    },
    24: {
      value: 'B',
    },
  });

  return (
    <div className={cx('border-r-2 border-[#979797] bg-white', 'wrapper')}>
      <table className={cx('CD_dataInput')} cellSpacing={0} cellPadding={0}>
        <tbody className={cx('table__body')}>
          {Array.from({ length: 6 }, (v, k) => k + 1).map((rowIndex) => (
            <tr key={rowIndex} className={cx('table__tr')}>
              {Array.from({ length: 6 }, (v, k) => k + 1).map((colIndex) => (
                <td
                  key={`${rowIndex}${colIndex}`}
                  className={cx(
                    'relative bg-white w-[17px] h-[17px] border-b-[1px] border-r-[1px] border-[#e6e6e6]',
                    'table__td',
                    'dark:table__td--dark'
                  )}>
                  <div className={cx('ba_AT_box')}>
                    <div
                      className={cx('text-white rounded-full text-xs text-center', {
                        'bg-[#0036ff]': dataPosition[`${colIndex}${rowIndex}`]?.value == 'P',
                        'bg-[#dc0000]': dataPosition[`${colIndex}${rowIndex}`]?.value == 'B',
                        'bg-[#3aaf00]': dataPosition[`${colIndex}${rowIndex}`]?.value == 'T',
                      })}>
                      {dataPosition[`${colIndex}${rowIndex}`]?.value || ''}
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
