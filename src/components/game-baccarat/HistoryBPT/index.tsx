'use client';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

export function HistoryBPT({
  baccaratId,
  initType,
  showOption,
  col,
  row,
  isLive,
}: {
  row: number;
  col: number;
  baccaratId: number;
  initType: string;
  showOption?: boolean;
  isLive?: boolean;
}): JSX.Element {
  const [type, setType] = useState(initType);
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
          {Array.from({ length: row }, (v, k) => k + 1).map((rowIndex) => (
            <tr key={rowIndex} className={cx('table__tr')}>
              {Array.from({ length: col }, (v, k) => k + 1).map((colIndex) => (
                <td
                  key={`${rowIndex}${colIndex}`}
                  className={cx(
                    'relative bg-white w-[17px] h-[17px] border-b-[1px] border-r-[1px] border-[#e6e6e6]',
                    'table__td',
                    'dark:table__td--dark',
                    { 'table__td--live': isLive }
                  )}>
                  {showOption && rowIndex == row && colIndex == col ? (
                    <div
                      onClick={() => setType((pre) => (pre == 'string' ? 'number' : 'string'))}
                      className={cx('cursor-pointer bg-no-repeat bg-contain w-full h-full', {
                        'bg-[url(/Content/images/btn_latticeSwitch.svg)]': type == 'string',
                        'bg-[url(/Content/images/btn_latticeSwitch_02.svg)]': type == 'number',
                      })}></div>
                  ) : (
                    <div
                      className={cx('w-full h-full cursor-pointer', 'ba_AT_box', {
                        'hover:bg-[#888]': isLive && dataPosition[`${colIndex}${rowIndex}`]?.value,
                      })}>
                      <div
                        className={cx('w-full h-full text-white rounded-full text-center', {
                          'ba_AT_box--live': isLive,
                          'bg-[#0036ff]': dataPosition[`${colIndex}${rowIndex}`]?.value == 'P',
                          'bg-[#dc0000]': dataPosition[`${colIndex}${rowIndex}`]?.value == 'B',
                          'bg-[#3aaf00]': dataPosition[`${colIndex}${rowIndex}`]?.value == 'T',
                        })}>
                        {dataPosition[`${colIndex}${rowIndex}`]?.value || ''}
                      </div>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
