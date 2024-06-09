import classNames from 'classnames/bind';
import styles from './baccaratItem.module.scss';
import Image from 'next/image';
import { TypeGameBaccarat } from '@/constants';
import { EvenOddResult } from '@/components/game/EvenOddResult';
import { DiceResultTX } from '@/components/game/DiceResultTX';
import { HistoryBPT } from '@/components/game-baccarat/HistoryBPT';

const cx = classNames.bind(styles);

export function BaccaratItem({
  name,
  status,
  type,
  typeText,
  image,
  national,
  nameAuthor,
  valueN,
  valueP,
  valueT,
  id,
}: {
  id: number;
  name: string;
  status?: string;
  type: string;
  typeText: string;
  image: string;
  national: string;
  nameAuthor: string;
  valueN: number;
  valueP: number;
  valueT: number;
}): JSX.Element {
  let imageNational = '';
  switch (national?.toLowerCase()) {
    case 'vn':
      imageNational = "url('/Content/images/bg_anchor_04.png')";
      break;
    case 'phl':
      imageNational = "url('/Content/images/bg_anchor_03.png')";
      break;
    default:
      break;
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className="flex items-center">
          <span
            className={cx('header__type', {
              'header__type--flash': TypeGameBaccarat.flash == type,
            })}>
            {typeText}
          </span>
          <span className={cx('header__name')}>{name}</span>
        </div>
        <span className={cx('header__value')}>{9}</span>
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
            loading="lazy"
            unoptimized={true}
          />
          {imageNational && (
            <div
              className={cx('game-body__nation')}
              style={{ background: `${imageNational} no-repeat` }}>
              <span>{nameAuthor}</span>
            </div>
          )}
        </div>
        <div className={cx('list-result')}>
          <HistoryBPT baccaratId={id} />
          {/* <DiceResultTX gameDiceId={id} /> */}
          {/* <EvenOddResult gameDiceId={id} /> */}
        </div>
      </div>
      <div className={cx('game-footer')}>
        <div className={cx('total__play')}>
          <div className={cx('total__play__B')}>
            <span className={cx('total__play--text')}>B</span>
            <span className={cx('total__play--value')}>{valueN}</span>
          </div>
          <div className={cx('total__play__P')}>
            <span className={cx('total__play--text')}>P</span>
            <span className={cx('total__play--value')}>{valueP}</span>
          </div>
          <div className={cx('total__play__T')}>
            <span className={cx('total__play--text')}>T</span>
            <span className={cx('total__play--value')}>{valueT}</span>
          </div>
        </div>
        <button className={cx('play__game')}>Vào chơi</button>
      </div>
    </div>
  );
}
