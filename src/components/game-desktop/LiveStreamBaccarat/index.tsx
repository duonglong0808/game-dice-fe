'use client';

import CountDownBet from '@/components/game/CountDown';
import { useAppSelector } from '@/lib';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { ControllerBaccarat } from '../ControllerBaccarat/insex';

const cx = classNames.bind({});
export function LiveStreamBaccarat(): JSX.Element {
  const { baccaratGame, gameBaccaratId } = useAppSelector((state) => state.baccaratGame);
  const gameBaccaratById = baccaratGame.find((baccarat) => baccarat.id === gameBaccaratId);

  //   Message
  const messageRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState('');
  useEffect(() => {
    // if (
    //   [StatusDiceDetail.bet, StatusDiceDetail.waitOpen, StatusDiceDetail.end].includes(
    //     statsDiceDetail
    //   )
    // ) {
    //   messageRef.current?.classList.add(cx('message__box--jump'));
    //   setTimeout(() => {
    //     messageRef.current?.classList.remove(cx('message__box--jump'));
    //   }, 3000);
    // }
  }, [message]);

  return (
    <div className="bg-black relative h-full">
      <iframe
        _ngcontent-qpb-c33=""
        width="100%"
        height="855"
        src={gameBaccaratById?.idLive}
        // src="https://www.youtube.com/embed/xhjQVKQYMQE?si=cwD-ICooa9nlUB5q"
        className={cx('iframe_container')}></iframe>

      <div className="absolute top-0 left-0 right-0 bottom-0"></div>
      {/* <CountDownBet
        setTotalPointBet={setTotalBet}
        setDataBetConfirmOld={setDataBetConfirmOld}
        dataBetConfirmOld={dataBetConfirmOld}
      /> */}
      {/* {countDown && <CountDownBet initCount={countDown} />} */}
      {message ? (
        <div className={cx('message__box')} ref={messageRef}>
          <div className={cx('message__box--body')}>
            <span className={cx('message__box--text')}>{message}</span>
          </div>
        </div>
      ) : (
        <></>
      )}
      <ControllerBaccarat />
    </div>
  );
}
