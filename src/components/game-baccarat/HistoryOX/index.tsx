'use client';

import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind({});

export function HistoryOX(): JSX.Element {
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
    24: {
      value: 5,
    },
    25: {
      value: 5,
    },
    31: {
      value: 6,
    },
  });

  return (
    <div className={cx('bg-white flex-1', 'wrapper')}>
      <table className={cx('CD_dataInput')} cellSpacing={0} cellPadding={0}>
        <tbody className={cx('table__body')}>
          {Array.from({ length: 8 }, (v, k) => k + 1).map((rowIndex) => (
            <tr key={rowIndex} className={cx('table__tr')}>
              {Array.from({ length: 20 }, (v, k) => k + 1).map((colIndex) => (
                <td
                  key={`${rowIndex}${colIndex}`}
                  className={cx(
                    'relative bg-white border-b-[1px] border-r-[1px] border-[#e6e6e6]',
                    'table__td',
                    'dark:table__td--dark'
                  )}>
                  <div className="static w-full h-full block">
                    <div
                      className={cx(
                        'text-white rounded-full h-3 w-3 text-xs text-center relative flex items-center justify-center',
                        {
                          'border-[1px] border-[#0036ff]':
                            dataPosition[`${colIndex}${rowIndex}`]?.value == 1 ||
                            dataPosition[`${colIndex}${rowIndex}`]?.value == 2,
                          'border-[1px] border-[#dc0000]':
                            dataPosition[`${colIndex}${rowIndex}`]?.value == 3 ||
                            dataPosition[`${colIndex}${rowIndex}`]?.value == 4,
                          'text-[#3aaf00]': dataPosition[`${colIndex}${rowIndex}`]?.value == 5,
                          'bg-[url(/Content/images/icon_s6.svg)] bg-no-repeat bg-center bg-contain':
                            dataPosition[`${colIndex}${rowIndex}`]?.value == 6,
                        }
                      )}>
                      {dataPosition[`${colIndex}${rowIndex}`]?.value != 6 ? (
                        <div
                          className={cx('rounded-full w-[8px] h-[8px] bg-white', {
                            'bg-[#7c98ff]': dataPosition[`${colIndex}${rowIndex}`]?.value == '2',
                            'bg-[#fea2a2]': dataPosition[`${colIndex}${rowIndex}`]?.value == '4',
                          })}></div>
                      ) : (
                        <></>
                      )}
                      {dataPosition[`${colIndex}${rowIndex}`]?.value == 5 ? (
                        <div className={cx('font-semibold')}>X</div>
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
