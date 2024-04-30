'use client';

import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { handleLoginGame } from './ulti/handleLoading';
import { useAppDispatch } from '@/lib';

const cx = classNames.bind(styles);

export default function LoadingScreen() {
  // const isResponsive = useIsResponsive();
  const isResponsive = true;
  const router = useRouter();
  const searchParams = useSearchParams();
  // const refresh_token = searchParams.get('refresh_token');
  // const access_token = searchParams.get('access_token');

  const refresh_token = searchParams.get('refresh_token') || localStorage.getItem('refresh_token');
  const access_token = searchParams.get('access_token') || localStorage.getItem('access_token');
  const dispatch = useAppDispatch();

  const [numberLoading, setNumberLoading] = useState(0);

  useEffect(() => {
    if (numberLoading >= 100) {
      setNumberLoading(99);
    } else {
      setTimeout(() => {
        setNumberLoading((pre) => {
          return pre + 6;
        });
      }, 200);
    }

    async function fetchData() {
      if (numberLoading == 99) {
        if (access_token && refresh_token) {
          const check = await handleLoginGame(access_token, refresh_token, dispatch);
          if (check) router.replace('/game');
          else {
            console.log('ooj');
            router.replace('/error');
          }
        } else {
          console.log('oojdsfbdjhm');
          router.replace('/error');
        }
      }
    }
    fetchData();
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
