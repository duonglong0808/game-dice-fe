'use client';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

export default function CountDownBet({ initCount }: { initCount?: number }) {
  const [count, setCount] = useState(initCount || 14);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount((pre) => pre - 1);
      }, 1000);
    }
  }, [count]);

  return (
    count && (
      <div className={cx('wrapper', { sec10: count <= 10 })}>
        <div className={cx('countDNum')}>{count}</div>
        <div className={cx('icon_message_line')}></div>
        <div className={cx('loadingImg')}></div>
      </div>
    )
  );
}
