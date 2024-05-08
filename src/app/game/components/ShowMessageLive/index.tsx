import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';
import WebSocketSingleton from '@/lib/ws/wskInstance';
import { EventSocket, StatusDiceDetail, TypeEmitMessage, TypeUpdatePointUser } from '@/constants';
import { useAppSelector } from '@/lib';

const cx = classNames.bind(styles);

export function ShowMessageLive(): JSX.Element {
  const [message, setMessage] = useState('');
  // console.log('🚀 ~ ShowMessageLive ~ message:', message);
  const messageRef = useRef<HTMLDivElement>(null);
  const { gamePoint } = useAppSelector((state) => state.userCurrent);
  const gamePointRef = useRef(gamePoint);

  // useEffect(() => {
  //   const wsk = WebSocketSingleton.getInstance();
  //   wsk.checkAndConnectSocket();

  //   wsk.joinRoom();

  //   wsk.listeningEvent(EventSocket.Data, (data: any) => {
  //     const type = data?.typeEmit;
  //     console.log('🚀 ~ wsk.listeningEvent ~ data ===============:', data, type);
  //     switch (type) {
  //       case TypeEmitMessage.updateStatusDice:
  //         const statusDice = String(data.status)?.split(':')[0];
  //         // console.log('🚀 ~ wsk.listeningEvent ~ statusDice:', statusDice);
  //         switch (+statusDice) {
  //           case StatusDiceDetail.bet:
  //             setMessage('Đã bắt đầu vui lòng đặt cược');
  //             break;
  //           case StatusDiceDetail.waitOpen:
  //             setMessage('Chờ mở thưởng');
  //             break;
  //           case StatusDiceDetail.end:
  //             if (gamePoint < gamePointRef.current) {
  //               setMessage(String(gamePoint - gamePointRef.current));
  //             }
  //             gamePointRef.current = gamePoint;
  //             // console.log('🚀 ~ LiveStream ~ message:', message);
  //             break;
  //           default:
  //             break;
  //         }
  //         break;
  //       case TypeEmitMessage.updatePoint:
  //         console.log('Update point', data, data.type);
  //         switch (data.type) {
  //           case TypeUpdatePointUser.up:
  //             console.log('Updating point', data);
  //             setMessage(`+${data.point}`);
  //             break;
  //           case TypeUpdatePointUser.down:
  //             // Xử lý khi thua
  //             // alert('Ván này bạn đã thua ');
  //             break;
  //           default:
  //             break;
  //         }
  //         break;
  //       default:
  //         break;
  //     }
  //   });

  //   return () => {
  //     wsk.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    console.log('🚀 ~ useEffect ~ messageRef.current:', messageRef.current);
    if (message) {
      messageRef.current?.classList.add(cx('message__box--jump'));

      setTimeout(() => {
        // setCountShow((pre) => pre - 1);
        messageRef.current?.classList.remove(cx('message__box--jump'));
      }, 3000);
      // if (countShow >= 1) {
      // } else {
      //   // setCountShow(4);
      // }
    }
  }, [message]);

  return (
    <div className={cx('message__box')} ref={messageRef}>
      <div className={cx('message__box--body')}>
        <span className={cx('message__box--text')}>{message}</span>
      </div>
    </div>
  );
}
