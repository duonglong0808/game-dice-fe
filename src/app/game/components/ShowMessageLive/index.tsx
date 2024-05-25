import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useEffect, useRef } from 'react';
import { StatusDiceDetail } from '@/constants';

const cx = classNames.bind(styles);

export function ShowMessageLive({
  message,
  statsDiceDetail,
}: {
  message: string;
  statsDiceDetail?: number;
}): JSX.Element {
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      [StatusDiceDetail.bet, StatusDiceDetail.waitOpen, StatusDiceDetail.end].includes(
        Number(statsDiceDetail)
      )
    ) {
      if (messageRef.current) {
        messageRef.current.style.display = 'block';
        messageRef.current.classList.add(cx('message__box--jump'));

        setTimeout(() => {
          if (messageRef.current) {
            messageRef.current.style.display = 'none';
            messageRef.current.classList.remove(cx('message__box--jump'));
          }
        }, 3000);
      }
    }
  }, [message, statsDiceDetail]);

  return (
    <div className={cx('message__box')} ref={messageRef}>
      <div className={cx('message__box--body')}>
        <span className={cx('message__box--text')}>{message}</span>
      </div>
    </div>
  );
}
