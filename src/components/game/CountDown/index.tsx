'use client';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '@/lib';
import { StatusDiceDetail } from '@/constants';

const cx = classNames.bind(styles);

export default function CountDownBet() {
  const { dataDiceDetailCurrent } = useAppSelector((state) => state.diceDetail);
  const { gameDiceId } = useAppSelector((state) => state.diceGame);
  let dataDiceDetailById = dataDiceDetailCurrent.find((d) => d.gameDiceId == gameDiceId);
  const dataStatusDice =
    typeof dataDiceDetailById?.status == 'string'
      ? dataDiceDetailById?.status?.split(':')
      : [dataDiceDetailById?.status];
  const statsDiceDetail = Number(dataStatusDice[0]);
  const timeStartBet = Number(dataStatusDice[1]);
  const timeStamp = new Date().getTime();
  const [count, setCountDown] = useState(0);

  useEffect(() => {
    if (statsDiceDetail == StatusDiceDetail.bet) {
      let countDown = timeStartBet > timeStamp && Math.ceil((timeStartBet - timeStamp) / 1000);
      if (typeof countDown == 'number' && countDown > 14) countDown = 14;
      setCountDown(Number(countDown));
    }
  }, [statsDiceDetail]);

  useEffect(() => {
    if (count >= 1) {
      setTimeout(() => {
        setCountDown((pre) => pre - 1);
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
