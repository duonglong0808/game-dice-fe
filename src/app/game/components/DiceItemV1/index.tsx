import classNames from 'classnames/bind';
import styles from './diceItem.module.scss';
import Image from 'next/image';
import { EvenOddResult } from '../EvenOddResult';

const cx = classNames.bind(styles);

export function XocDiaItem({
  nameGame,
  status,
  valueStatus,
  image,
  nation,
  nameAuthor,
  valueL,
  valueC,
  onClick,
}: {
  nameGame: string;
  status?: string;
  valueStatus: string;
  image: string;
  nation: string;
  nameAuthor: string;
  valueL: number;
  valueC: number;
  onClick: () => void;
}): JSX.Element {
  let imageNational = '';
  switch (nation.toLowerCase()) {
    case 'vn':
      imageNational = "url('/Content/Images/bg_anchor_04.png')";
      break;
    case 'phl':
      imageNational = "url('/Content/Images/bg_anchor_03.png')";
      break;
    default:
      break;
  }

  return (
    <div className={cx('wrapper')} onClick={onClick}>
      <div className={cx('header')}>
        <span className={cx('header__name')}>{nameGame}</span>
        <span className={cx('header__value')}>{valueStatus}</span>
      </div>
      <div className={cx('game-body')}>
        <div
          style={{
            position: 'relative',
            marginRight: '5px',
            overflow: 'hidden',
          }}>
          <Image
            alt="Image ido"
            src={image}
            loader={() => image}
            className={cx('game-body__image')}
            width={97}
            height={107}
          />
          <div
            className={cx('game-body__nation')}
            style={{ background: `${imageNational} no-repeat` }}>
            <span>{nameAuthor}</span>
          </div>
        </div>
        <div className={cx('list-result')}>
          <div
            style={{
              borderRight: '2px solid #3a3a3a',
              //   width: '162px',
              //   height: '100%',
            }}>
            <EvenOddResult />
          </div>
          <EvenOddResult />
        </div>
      </div>
      <div className={cx('game-footer')}>
        <div className={cx('total__play')}>
          <div className={cx('total__play__L')}>
            <span className={cx('total__play--text')}>L</span>
            <span className={cx('total__play--value')}>{valueL}</span>
          </div>
          <div className={cx('total__play__C')}>
            <span className={cx('total__play--text')}>C</span>
            <span className={cx('total__play--value')}>{valueC}</span>
          </div>
        </div>
        <button className={cx('play__game')}>Vào chơi</button>
      </div>
    </div>
  );
}
