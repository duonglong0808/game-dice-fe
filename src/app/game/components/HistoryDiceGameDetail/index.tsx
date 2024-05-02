'use client';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export function HistoryDiceGameDetail(): JSX.Element {
  return (
    <div className={cx('wrapper')}>
      <table className={cx('wrapper-table')}>
        <tbody className={cx('wrapper-table__tbody')}>
          <tr className={cx('wrapper-table__tr')}>
            <td className={cx('wrapper-table__td')}>
              <div className={cx('wrapper-table__td--CD_ballBox')}>
                <div className={cx('CD_yellow_ball')}>3</div>
              </div>
            </td>
            <td className={cx('wrapper-table__td')}>
              <div className={cx('wrapper-table__td--CD_ballBox')}>
                <div className={cx('CD_green_ball')}>2</div>
              </div>
            </td>
            <td className={cx('wrapper-table__td')}>
              <div className={cx('wrapper-table__td--CD_ballBox')}>
                <div className={cx('CD_orange_ball')}>4</div>
              </div>
            </td>
            <td className={cx('wrapper-table__td')}>
              <div className={cx('wrapper-table__td--CD_ballBox')}>
                <div className={cx('CD_green_ball')}>2</div>
              </div>
            </td>
            <td className={cx('wrapper-table__td')}>
              <div className={cx('wrapper-table__td--CD_ballBox')}>
                <div className={cx('CD_yellow_ball')}>3</div>
              </div>
            </td>
            <td className={cx('wrapper-table__td')}>
              <div className={cx('wrapper-table__td--CD_ballBox')}>
                <div className={cx('CD_green_ball')}>2</div>
              </div>
            </td>
            <td className={cx('wrapper-table__td')}> </td>
          </tr>
          <tr className={cx('wrapper-table__tr')}>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
          </tr>
          <tr className={cx('wrapper-table__tr')}>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
          </tr>
          <tr className={cx('wrapper-table__tr')}>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
          </tr>
          <tr className={cx('wrapper-table__tr')}>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
          </tr>
          <tr className={cx('wrapper-table__tr')}>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}> </td>
            <td className={cx('wrapper-table__td')}>
              <div className="btn_CDlatticeSwitch"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
