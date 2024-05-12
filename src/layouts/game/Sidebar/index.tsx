'use client';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/lib';
import { redirect } from 'next/navigation';

const cx = classNames.bind(styles);

export function SliderBarGame(): JSX.Element {
  const { name, userName, gamePoint } = useAppSelector((state) => state.userCurrent);

  // TODO: unable  wwith prod
  if (!userName) redirect('error');

  const clickAutoConfirm = (e: any) => {
    const element = e.target as HTMLElement;
    element.classList.toggle(cx('auto-confirm__check'));
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('account-info')}>
        <p className={cx('account-info__rank')}>Đồng</p>
        <Image
          className={cx('account-info__avatar')}
          alt="Avatar"
          src={'/Content/images/vn/icon_level1.png'}
          width={21}
          height={21}
        />
        <div className={cx('account-info__body')}>
          <p className={cx('account-info__name')}>{userName?.toUpperCase()}</p>
          <p className={cx('account-info__username')}>PU</p>
        </div>
      </div>
      <div className={cx('balance-gift')}>
        <div className={cx('balance-gift__balance')}>
          <p className={cx('balance-gift__title')}>$</p>
          <p className={cx('balance-gift__value')}>
            {Math.ceil(gamePoint)?.toLocaleString('vi-VN')}
          </p>
        </div>
        <div className={cx('balance-gift__gift')}>
          <Image
            alt="Gift"
            src={'/Content/images/icon_gift.svg'}
            className={cx('balance-gift__title')}
            width={16}
            height={16}
          />
          <p className={cx('balance-gift__value')}>0</p>
          <div className={cx('balance-gift__help')}></div>
        </div>
        <button className={cx('history-bet')}>Lịch sử đặt cược</button>
        <div className={cx('auto-confirm__box')}>
          <span className={cx('auto-confirm__text')}>Auto xác nhận</span>
          <div className={cx('auto-confirm__input')} onClick={clickAutoConfirm}></div>
        </div>
      </div>

      <ul className={cx('list-game')}>
        <li className={cx('item-game', 'item-game-xd__active')}>
          <Link href={'aa'}>Xóc đĩa</Link>
        </li>
        <li className={cx('item-game', 'item-game__mc')}>MC Baccarat</li>
        <li className={cx('item-game', 'item-game__chinaBacca')}>China Baccarat</li>
        <li className={cx('item-game', 'item-game__blockchainBacca')}>Blockchain Baccarat</li>
        <li className={cx('item-game')}>Sic Bo</li>
        <li className={cx('item-game')}>Rồng hổ</li>
        <li className={cx('item-game')}>Trác Kim Hoa</li>
        <li className={cx('item-game')}>Roulette</li>
        <li className={cx('item-game')}>Blockchain Ba Tây</li>
        <li className={cx('item-game')}>Ngầu Hầm</li>
        <li className={cx('item-game')}>Blockchain Pokdeng</li>
        <li className={cx('item-game')}>Nhiều bản</li>
      </ul>
    </div>
  );
}
