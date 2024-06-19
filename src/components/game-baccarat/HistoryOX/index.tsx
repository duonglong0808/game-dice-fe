'use client';

import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export function HistoryOX({
  baccaratId,
  col,
  row,
  isLive,
}: {
  row: number;
  col: number;
  baccaratId: number;
  isLive?: boolean;
}): JSX.Element {
  const [dataPosition, setDataPosition] = useState<any>({
    11: {
      value: 1, // Xanh rỗng
    },
    12: {
      value: 2, // Xanh full
    },
    13: {
      value: 3, // Đỏ rỗng
    },
    21: {
      value: 4, // đỏ full
    },
    22: {
      value: 5, // X
    },
    23: {
      value: 6, // 6
    },
  });

  return (
    <div className={cx('bg-white flex-1 border-[#979797] border-b-[1px] lg:border-b-0', 'wrapper')}>
      <table className={cx('w-full h-full')} cellSpacing={0} cellPadding={0}>
        <tbody className={cx('table__body')}>
          {Array.from({ length: row }, (v, k) => k + 1).map((rowIndex) => (
            <tr key={rowIndex} className={cx('table__tr')}>
              {Array.from({ length: col }, (v, k) => k + 1).map((colIndex) => (
                <td
                  key={`${rowIndex}${colIndex}`}
                  className={cx(
                    'relative bg-white border-b-[1px] border-r-[1px] border-[#e6e6e6]',
                    'table__td',
                    'dark:table__td--dark',
                    { 'table__td--live': isLive }
                  )}>
                  <div className="static w-full h-full block">
                    <div
                      className={cx(
                        'text-white rounded-full text-xs text-center relative flex items-center justify-center',
                        {
                          'border-[1px] border-[#0036ff!important]':
                            dataPosition[`${colIndex}${rowIndex}`]?.value == 1 ||
                            dataPosition[`${colIndex}${rowIndex}`]?.value == 2,
                          'border-[1px] border-[#dc0000!important]':
                            dataPosition[`${colIndex}${rowIndex}`]?.value == 3 ||
                            dataPosition[`${colIndex}${rowIndex}`]?.value == 4,
                          'bg-[url(/Content/images/icon_s6.svg)] bg-no-repeat bg-center bg-contain':
                            dataPosition[`${colIndex}${rowIndex}`]?.value == 6,
                          'h-3 w-3': !isLive,
                          'table__td--box-live': isLive,
                        }
                      )}>
                      {dataPosition[`${colIndex}${rowIndex}`]?.value != 6 ? (
                        <div
                          className={cx(
                            'absolute top-[1px] left-[1px] right-[1px] bottom-[1px] rounded-full bg-white',
                            {
                              'table__td--box': isLive,
                              'bg-[#7c98ff!important]':
                                dataPosition[`${colIndex}${rowIndex}`]?.value == '2',
                              'bg-[#fea2a2!important]':
                                dataPosition[`${colIndex}${rowIndex}`]?.value == '4',
                            }
                          )}></div>
                      ) : (
                        <></>
                      )}
                      {dataPosition[`${colIndex}${rowIndex}`]?.value == 5 ? (
                        <div
                          className={cx(
                            'absolute top-[0] left-[0] right-[0] bottom-[0] font-semibold text-[#3aaf00]',
                            {
                              'text-[10px] lg:text-base': isLive,
                            }
                          )}>
                          X
                        </div>
                      ) : (
                        <></>
                      )}
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
