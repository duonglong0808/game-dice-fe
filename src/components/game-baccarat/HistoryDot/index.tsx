'use client';

import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind({});

export function HistoryDotBaccarat({ baccaratId }: { baccaratId: number }): JSX.Element {
  const [dataPosition, setDataPosition] = useState<any>({
    11: {
      value: ['red', 'red', 'blue'],
    },
    12: {
      value: ['red', 'blue'],
    },

    21: {
      value: ['blue', 'blue'],
    },
    22: {
      value: ['blue', 'blue'],
    },
    31: {
      value: ['red'],
    },
  });

  return (
    <div className={cx('bg-white border-r-[1px] border-l-[1px] border-[#979797]')}>
      <table className={cx('CD_dataInput w-full')} cellSpacing={0} cellPadding={0}>
        <tbody className={cx('table__body')}>
          {Array.from({ length: 3 }, (v, k) => k + 1).map((rowIndex) => (
            <tr key={rowIndex} className={cx('table__tr')}>
              {Array.from({ length: 9 }, (v, k) => k + 1).map((colIndex) => (
                <td
                  key={`${rowIndex}${colIndex}`}
                  className={cx(
                    'relative bg-white border-b-[1px] border-r-[1px] border-[#e6e6e6] ',
                    'table__td'
                  )}>
                  <div className="flex flex-col justify-between mx-auto flex-wrap w-[16.5px] h-[18px]">
                    {dataPosition[`${colIndex}${rowIndex}`]?.value?.map((item: any) => (
                      <span
                        className={cx('w-[7.5px] h-[7.5px] rounded-full', {
                          'bg-[#db1002]': item == 'red',
                          'bg-[#0403cb]': item == 'blue',
                        })}></span>
                    ))}
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
