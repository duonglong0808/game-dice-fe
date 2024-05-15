'use client';

import classNames from 'classnames/bind';
import styles from './evenOdd.module.scss';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

interface DiceDetailDto {
  gameDiceId: number;
  status: string | number;
  totalRed: number;
  transaction: number;
  mainTransaction: number;
  diceDetailId: number;
  arrBetActive?: string[];
}
const dataDemo: DiceDetailDto[] = [
  {
    transaction: 0,
    diceDetailId: 0,
    gameDiceId: 1,
    mainTransaction: 1,
    status: 5,
    totalRed: 3,
  },
  {
    transaction: 1,
    diceDetailId: 1,
    gameDiceId: 1,
    mainTransaction: 1,
    status: 5,
    totalRed: 2,
  },
  {
    transaction: 2,
    mainTransaction: 2,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 2,
  },
  {
    transaction: 3,
    mainTransaction: 3,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 2,
  },
  {
    transaction: 4,
    mainTransaction: 4,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 2,
  },
  {
    transaction: 5,
    mainTransaction: 5,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 2,
  },
  {
    transaction: 6,
    mainTransaction: 6,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 3,
  },
  {
    transaction: 7,
    mainTransaction: 7,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 2,
  },
  {
    transaction: 8,
    mainTransaction: 8,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 3,
  },
  {
    transaction: 9,
    mainTransaction: 9,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 3,
  },
  {
    transaction: 10,
    mainTransaction: 10,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 3,
  },
  {
    transaction: 11,
    mainTransaction: 11,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 3,
  },
  {
    transaction: 12,
    mainTransaction: 12,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 3,
  },
  {
    transaction: 13,
    mainTransaction: 13,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 3,
  },
  {
    transaction: 14,
    mainTransaction: 14,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 3,
  },
  {
    transaction: 15,
    mainTransaction: 15,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 3,
  },
  {
    transaction: 16,
    mainTransaction: 16,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 2,
  },
  {
    transaction: 17,
    mainTransaction: 17,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 2,
  },
  {
    transaction: 18,
    mainTransaction: 18,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 2,
  },
  {
    transaction: 19,
    mainTransaction: 19,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 3,
  },
  {
    transaction: 20,
    mainTransaction: 20,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 2,
  },
  {
    transaction: 21,
    mainTransaction: 21,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 3,
  },
  {
    transaction: 22,
    mainTransaction: 22,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 3,
  },
  {
    transaction: 23,
    mainTransaction: 23,
    diceDetailId: 1,
    gameDiceId: 1,
    status: 5,
    totalRed: 3,
  },
];

export function EvenOddResult({ gameDiceId }: { gameDiceId: number }): JSX.Element {
  const row = useRef(6);
  const col = useRef(8);
  const dataSort = [...dataDemo].sort((a, b) => b.mainTransaction - a.mainTransaction);
  let indexCurrent = 0;
  const dataPosition = useRef<any>({});
  console.log('🚀 ~ EvenOddResult ~ dataPosition:', dataPosition.current);
  // const [dataPosition, setDataPosition] = useState<any>({});
  const [isHandleData, setIsHandleData] = useState(true);

  useEffect(() => {
    if (isHandleData) {
      console.log('Xuwr lys dataa');
      const dataPositionCalc: any = {};

      dataSort.forEach((item, index, arrThis) => {
        if (col.current != 0) {
          // console.log('🚀 ~ dataSort.forEach ~ col.current:', col.current);
          if (index == indexCurrent) {
            const type = item.totalRed % 2 === 0 ? 'C' : 'L';

            const lisTypeEquals: DiceDetailDto[] = [];
            const subArr = arrThis.slice(indexCurrent);
            for (let index = 0; index < subArr.length; index++) {
              const item2 = subArr[index];
              const type2 = item2.totalRed % 2 == 0 ? 'C' : 'L';
              if (type2 == type) {
                lisTypeEquals.push(item2);
              } else {
                break;
              }
            }
            if (lisTypeEquals.length > 2) {
              if (lisTypeEquals.length > 6) {
                let colTg = col.current + (lisTypeEquals.length - 6);
                for (let i = 0; i < lisTypeEquals.length; i++) {
                  const element = lisTypeEquals[i];
                  indexCurrent++;
                  if (lisTypeEquals.length - i > 6) {
                    // console.log('Lặp', colTg);
                    const position = `${colTg}6`;
                    dataPositionCalc[position] = element;
                    colTg = colTg - 1;
                  } else {
                    const position = `${colTg}${lisTypeEquals.length - i}`;
                    dataPositionCalc[position] = element;
                  }
                }
                col.current = col.current - 1;
              } else {
                for (let i = 0; i < lisTypeEquals.length; i++) {
                  const element = lisTypeEquals[i];
                  indexCurrent++;
                  const position = `${col.current}${lisTypeEquals.length - i}`;
                  dataPositionCalc[position] = element;
                }
                col.current = col.current - 1;
              }
            } else {
              const position = `${col.current}1`;
              dataPositionCalc[position] = item;
              col.current = col.current - 1;
              row.current = 1;
              indexCurrent++;
            }
          }
        }
      });

      console.log('🚀 ~ useEffect ~ dataPositionCalc:', dataPositionCalc);
      if (JSON.stringify(dataPosition.current) == '{}') {
        console.log('Ghi ddef ');
        dataPosition.current = dataPositionCalc;
      }
      setIsHandleData(false);
      // setDataPosition((pre: any) => dataPositionCalc);
    }
  }, [isHandleData]);

  return (
    <div className={cx('wrapper')}>
      <table className={cx('CD_dataInput')} cellSpacing={0} cellPadding={0}>
        <tbody className={cx('table__body')}>
          {Array.from({ length: 6 }, (v, k) => k + 1).map((rowIndex) => (
            <tr key={rowIndex} className={cx('table__tr')}>
              {Array.from({ length: 9 }, (v, k) => k + 1).map((colIndex) => (
                <td
                  key={`${rowIndex}${colIndex}`}
                  className={cx('table__td', 'dark:table__td--dark')}>
                  <div className={cx('ba_AT_box')}>
                    <div
                      className={
                        dataPosition.current[`${colIndex}${rowIndex}`]?.totalRed % 2 == 1
                          ? cx('ba_ATred_bigT')
                          : cx('ba_ATBall_bigT')
                      }>
                      {dataPosition.current[`${colIndex}${rowIndex}`]?.totalRed
                        ? dataPosition.current[`${colIndex}${rowIndex}`]?.totalRed % 2 == 0
                          ? 'C'
                          : 'L'
                        : ''}
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
          {/* <tr className={cx('table__tr')}>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')}>C</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATred_bigT')}>L</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')}>C</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')}>C</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')}>C</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')}>C</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')}>C</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')}>C</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}></td>
          </tr>
          <tr className={cx('table__tr')}>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')}>C</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATred_bigT')}>L</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}></td>
          </tr>
          <tr className={cx('table__tr')}>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')}>C</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATred_bigT')}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}></td>
          </tr>
          <tr className={cx('table__tr')}>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')}>C</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}></td>
          </tr>
          
          <tr className={cx('table__tr')}>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')}>C</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')}>C</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')}>C</div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}></td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
