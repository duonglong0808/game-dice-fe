'use client';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

export default function CountDownBet({ initCount }: { initCount?: number }) {
  const [count, setCount] = useState(initCount || 14);

  useEffect(() => {
    if (count >= 1) {
      setTimeout(() => {
        setCount((pre) => pre - 1);
      }, 1000);
    }
  }, [count]);

  return count ? (
    <>
      <div className={cx('wrapper', { sec10: count <= 10 })}>
        <div className={cx('countDNum')}>{count}</div>
        <div className={cx('icon_message_line')}></div>
        <div className={cx('loadingImg')}></div>
      </div>
      <div className={cx('wrapper-control')}>
        <div className={cx('wrapper-control__box')}>
          <div className={cx('wrapper-control__box--bg')}></div>
          <div className={cx('wrapper-control__item', 'wrapper-control__rollback')}></div>
        </div>
        <div className={cx('wrapper-control__box')}>
          <div className={cx('wrapper-control__box--bg')}></div>
          <div className={cx('wrapper-control__item', 'wrapper-control__swapper')}></div>
        </div>
        <div className={cx('wrapper-control__box')}>
          <div className={cx('wrapper-control__box--bg')}></div>
          <div className={cx('wrapper-control__item', 'wrapper-control__check')}></div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
