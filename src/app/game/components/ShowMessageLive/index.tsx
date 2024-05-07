import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

export function ShowMessageLive({ message }: { message: string }): JSX.Element {
  console.log('🚀 ~ ShowMessageLive ~ message:', message);
  const messageRef = useRef<HTMLDivElement>(null);
  const [countShow, setCountShow] = useState(4);

  useEffect(() => {
    console.log('🚀 ~ useEffect ~ messageRef.current:', messageRef.current);
    console.log('🚀 ~ useEffect ~ countShow:', countShow);
    if (message && countShow != 4) {
      messageRef.current?.classList.add(cx('message__box--jump'));

      if (countShow >= 1) {
        setTimeout(() => {
          setCountShow((pre) => pre - 1);
          // messageRef.current?.classList.remove(cx('message__box--jump'));
        });
      } else {
        setCountShow(4);
      }
    }
  }, [countShow, message]);

  return countShow ? (
    <div className={cx('message__box')} ref={messageRef}>
      <div className={cx('message__box--body')}>
        <span className={cx('message__box--text')}>{message}</span>
      </div>
    </div>
  ) : (
    <></>
  );
}
