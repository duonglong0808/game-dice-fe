'use client';

import classNames from 'classnames/bind';
import styles from './evenOdd.module.scss';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

export function EvenOddResult(): JSX.Element {
  const mood = useRef('');

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     mood.current =
  //       !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches
  //         ? 'dark'
  //         : 'light';
  //   }
  //   console.log(
  //     "🚀 ~ useEffect ~ window.matchMedia('(prefers-color-scheme: dark)').matches:",
  //     window.matchMedia('(prefers-color-scheme: light)').matches
  //   );
  //   console.log('🚀 ~ useEffect ~ mood.current:', mood.current);
  // }, []);

  return (
    <div className={cx('wrapper')}>
      <table className={cx('CD_dataInput')} cellSpacing={0} cellPadding={0}>
        <tbody className={cx('table__body')}>
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
            <td className={cx('table__td', 'dark:table__td--dark')}>
              <div className={cx('ba_AT_box')}>
                <div className={cx('ba_ATBall_bigT')} style={{ color: '' }}></div>
              </div>
            </td>
            <td className={cx('table__td', 'dark:table__td--dark')}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
