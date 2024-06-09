'use client';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

export function HistoryBPT({ baccaratId }: { baccaratId: number }): JSX.Element {
  const [dataPosition, setDataPosition] = useState<any>({});

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
                      className={
                        dataPosition[`${colIndex}${rowIndex}`]?.totalRed % 2 == 1
                          ? cx('ba_ATred_bigT')
                          : cx('ba_ATBall_bigT')
                      }>
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
