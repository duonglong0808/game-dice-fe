'use client';

import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

const cx = classNames.bind(styles);

export default function LoadingScreen() {
  // const isResponsive = useIsResponsive();
  const isResponsive = true;

  const [numberLoading, setNumberLoading] = useState(0);

  useEffect(() => {
    if (numberLoading >= 100) {
      redirect('/game');
    } else {
      setTimeout(() => {
        setNumberLoading((pre) => {
          return pre + 6;
        });
      }, 200);
    }
  }, [numberLoading]);

  return (
    <div className={cx('wrapper', 'relative')}>
      <div className={cx('loading__box')}>
        <Image
          src={'/Content/Images/vn/img_LD_model.png'}
          alt="img_LD_model"
          priority
          width={1420}
          height={900}
          className={cx('image__model')}
        />
        <Image
          src={'/Content/Images/vn/img_txt.png'}
          alt="img_LD_text"
          width={1150}
          height={289}
          className={cx('image__text')}
        />
        <div className={cx('loading__body')}>
          <div className={cx('loading__body--top')}>
            <span className={cx('loading__body--text')}>{numberLoading} %</span>
          </div>
          <span className={cx('loading__text', 'text-6xl')}>Loading ...</span>
          <div className={cx('loading__line')}></div>
        </div>
      </div>
    </div>
  );
}
