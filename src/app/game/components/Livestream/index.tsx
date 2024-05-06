'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { ICheckHover, StatusDiceDetail, dataListChipsStatistics } from '@/constants';
import { BaseAxios, useAppDispatch, useAppSelector } from '@/lib';
import TableItem from '../TableItem';
import ToolTipGame from '../ToolTip';
import ChipsList from '../ChipList/index.';
import Image from 'next/image';
import { setIndexChipsRedux } from '@/lib/redux/app/diceDetail.slice';
import CountDownBet from '../CountDown';
import { ShowResultDice } from '../ShowResultDice';
import { updatePointUser } from '@/lib/redux/app/userCurrent.slice';
// import ToolTipGame from '../tool-tip-game';
// import { ChipsList } from '../chips-list';

const cx = classNames.bind(styles);

export default function LiveStream({ src, gameDiceId }: { src: string; gameDiceId: number }) {
  const indexChipsRedux = useAppSelector((state) => state.diceDetail.indexChips);
  const [indexChips, setIndexChips] = useState<number[]>(indexChipsRedux);
  const [openListPhinh, setOpenListPhinh] = useState(false);
  const dispatch = useAppDispatch();

  // Ref
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  //
  const [hoverData, setHoverData] = useState<ICheckHover>({
    isHover: false,
    position: { x: 0, y: 0 },
  });
  const [curChip, setCurChip] = useState<number>(0);
  const { dataDiceDetail } = useAppSelector((state) => state.diceDetail);
  const { diceGame } = useAppSelector((state) => state.diceGame);
  const diceGameById = diceGame.find((d) => d.id === gameDiceId);
  let dataDiceDetailById = dataDiceDetail.find((d) => d.gameDiceId == gameDiceId);
  const dataStatusDice =
    typeof dataDiceDetailById?.status == 'string'
      ? dataDiceDetailById?.status?.split(':')
      : [dataDiceDetailById?.status];
  const statsDiceDetail = Number(dataStatusDice[0]);
  const timeStartBet = Number(dataStatusDice[1]);
  const timeStamp = new Date().getTime();
  const countDown = timeStartBet > timeStamp && Math.ceil((timeStartBet - timeStamp) / 1000);
  const arrBetActive = dataDiceDetailById?.arrBetActive;
  const totalRed = dataDiceDetailById?.totalRed;

  // Handle Message
  let message = '';
  switch (statsDiceDetail) {
    case StatusDiceDetail.bet:
      message = 'Đã bắt đầu vui lòng đặt cược';
      break;
    case StatusDiceDetail.waitOpen:
      message = 'Chờ mở thưởng';
      break;
    default:
      message = '';
      break;
  }

  // useEffect(() => {
  //   if(iframeRef.current) {
  //     var head = iframeRef.current.loading;
  //     var script = iframe.contentWindow.document.createElement('script');
  //     script.innerText = document.getElementById('iframejs').innerText;
  //     script.type = 'text/javascript';
  //     head.appendChild(script);
  //   }
  // })

  useEffect(() => {
    if ([StatusDiceDetail.bet, StatusDiceDetail.waitOpen].includes(statsDiceDetail)) {
      messageRef.current?.classList.add(cx('message__box--jump'));

      setTimeout(() => {
        messageRef.current?.classList.remove(cx('message__box--jump'));
      }, 3000);
    }
  }, [statsDiceDetail]);

  const chooseBet = async (position: number) => {
    console.log(position);
    const axios = new BaseAxios(process.env.API_GAME_DICE);

    const transaction = dataDiceDetailById?.transaction;
    const gameDiceId = dataDiceDetailById?.gameDiceId;
    const diceDetailId = dataDiceDetailById?.diceDetailId;

    if (transaction && gameDiceId && Number(statsDiceDetail) == StatusDiceDetail.bet) {
      try {
        if (curChip) {
          const requestBet = await axios.post('/history-play', {
            transaction,
            gameDiceId,
            diceDetailId,
            point: curChip,
            answer: position,
          });
          if (requestBet?.data) {
            dispatch(updatePointUser({ gamePoint: -curChip }));
          }
        }
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (!video) return;

  //   if (video.canPlayType('application/vnd.apple.mpegurl')) {
  //     // PlaybackRateController
  //     // This will run in safari, where HLS is supported natively
  //     video.src = src;
  //     video.controls = true;
  //   } else if (Hls.isSupported()) {
  //     // This will run in all other modern browsers
  //     const hls = new Hls({ maxLiveSyncPlaybackRate: 0 });
  //     hls.loadSource(src);
  //     // const player = new Plyr(video, defaultOptions);
  //     hls.attachMedia(video);

  //     // Bắt đầu phát video ngay khi có tín hiệu
  //     hls.on(Hls.Events.MANIFEST_PARSED, () => {
  //       video.play().catch((error) => {
  //         console.error('Error starting playback:', error);
  //       });
  //     });
  //   } else {
  //     console.error(
  //       'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API'
  //     );
  //   }
  // }, [videoRef]);

  return (
    <div className={cx('live_wrapper')}>
      <iframe
        _ngcontent-qpb-c33=""
        width="100%"
        height="855"
        src={diceGameById?.idLive}
        className={cx('iframe_container')}
        ref={iframeRef}></iframe>
      {/* <video className={cx('live_container')} id="video" ref={videoRef} autoFocus></video> */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}></div>
      {totalRed && <ShowResultDice totalRed={totalRed} />}
      {countDown && <CountDownBet initCount={countDown} />}
      {message ? (
        <div className={cx('message__box')} ref={messageRef}>
          <div className={cx('message__box--body')}>
            <span className={cx('message__box--text')}>{message}</span>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={cx('live_action')}>
        <div className={cx('d3')}>
          <div className={cx('d3__col')}>
            <TableItem
              className={cx('d3__col__row--1')}
              points={0}
              ratio={14}
              onClick={() => {
                chooseBet(1);
              }}
              isHighlight={Boolean(arrBetActive?.includes('p_0'))}>
              <p className={cx('col__row--counter')}>11</p>
            </TableItem>
            <TableItem
              className={cx('d3__col__row--1')}
              points={1}
              ratio={2.8}
              onClick={() => {
                chooseBet(2);
              }}
              isHighlight={Boolean(arrBetActive?.includes('p_1'))}>
              <p className={cx('col__row--counter')}>11</p>
            </TableItem>
            <TableItem
              className={cx('d3__col__row--1')}
              points={2}
              ratio={1.5}
              onClick={() => {
                chooseBet(3);
              }}
              isHighlight={Boolean(arrBetActive?.includes('p_2'))}>
              <p className={cx('col__row--counter')}>11</p>
            </TableItem>
          </div>
          <div className={cx('d3__col')}>
            <TableItem
              className={cx('d3__col__row--2')}
              points={0}
              ratio={0.96}
              name={'Chẵn'}
              onClick={() => {
                chooseBet(4);
              }}
              isHighlight={Boolean(arrBetActive?.includes('p_chan'))}>
              <p className={cx('col__row--counter')}>11</p>
            </TableItem>
            <TableItem
              className={cx('d3__col__row--2')}
              points={0}
              ratio={0.96}
              name={'Xỉu'}
              onHover={setHoverData}
              onClick={() => {
                chooseBet(5);
              }}
              isHighlight={Boolean(arrBetActive?.includes('p_xiu'))}>
              <p className={cx('col__row--counter')}>11</p>
            </TableItem>
          </div>
          <div className={cx('d3__col')}>
            <TableItem
              className={cx('d3__col__row--2')}
              points={0}
              ratio={0.96}
              name={'Lẻ'}
              onClick={() => {
                chooseBet(6);
              }}
              isHighlight={Boolean(arrBetActive?.includes('p_le'))}>
              <p className={cx('col__row--counter')}>11</p>
            </TableItem>
            <TableItem
              className={cx('d3__col__row--2')}
              points={0}
              ratio={0.96}
              name={'Tài'}
              isLeft={true}
              onHover={setHoverData}
              onClick={() => {
                chooseBet(7);
              }}
              isHighlight={Boolean(arrBetActive?.includes('p_tai'))}>
              <p className={cx('col__row--counter')}>11</p>
            </TableItem>
          </div>
          <div className={cx('d3__col')}>
            <TableItem
              className={cx('d3__col__row--1')}
              points={4}
              ratio={14}
              onClick={() => {
                chooseBet(8);
              }}
              isHighlight={Boolean(arrBetActive?.includes('p_4'))}>
              <p className={cx('col__row--counter')}>11</p>
            </TableItem>
            <TableItem
              className={cx('d3__col__row--1')}
              points={3}
              ratio={2.8}
              onClick={() => {
                chooseBet(9);
              }}
              isHighlight={Boolean(arrBetActive?.includes('p_3'))}>
              <p className={cx('col__row--counter')}>11</p>
            </TableItem>
            <TableItem
              className={cx('d3__col__row--1')}
              points={-1}
              ratio={6.5}
              onClick={() => {
                chooseBet(10);
              }}
              isHighlight={Boolean(arrBetActive?.includes('p_-1'))}>
              <p className={cx('col__row--counter')}>11</p>
            </TableItem>
          </div>
        </div>
        <div className={cx('live_action__control')}>
          <div className={cx('live_action__control--left')}>
            <button className={cx('btn-primary', 'active')}>Chuẩn</button>
            <button className={cx('btn-primary')}>Cao</button>
            <p className={cx('live_action__control--left__cuoc')}> Cược: </p>
            <p className={cx('live_action__control--left__value')}> 0 </p>
          </div>
          <div className={cx('live_action__control--right')}>
            <div className={cx('right__coins')}>
              <ChipsList setChips={setCurChip} curChip={curChip} />
            </div>
            <div className={cx('right__action')}>
              <div
                className={cx('right__action__phinh')}
                onClick={() => setOpenListPhinh((pre) => !pre)}></div>
              {openListPhinh && (
                <div className={cx('phing_wrapper')}>
                  <div className={cx('body__chips', 'grid grid-cols-4')}>
                    {dataListChipsStatistics.map((chip, index) => (
                      <Image
                        alt="chip phinh"
                        src={indexChips.includes(index) ? chip.on : chip.off}
                        key={index}
                        width={68}
                        height={68}
                        className={cx('body__chips--item')}
                        onClick={() => {
                          if (indexChips.includes(index)) {
                            setIndexChips((pre) => pre.filter((c) => c !== index));
                          } else if (indexChips.length < 8) {
                            setIndexChips((pre) => [...pre, index]);
                          }
                        }}
                      />
                    ))}
                  </div>
                  <div className={cx('body__confirm')}>
                    <div
                      className={cx('body__confirm--cancel')}
                      onClick={() => {
                        setIndexChips(indexChipsRedux);
                        setOpenListPhinh(false);
                      }}></div>
                    <span className={cx('body__confirm--text')}>
                      Chọn tối đa
                      <br></br>8 phỉnh
                      <span className={cx('body__confirm--icon')}></span>
                    </span>
                    <button
                      className={cx('body__confirm--btn')}
                      onClick={() => {
                        dispatch(setIndexChipsRedux({ indexChips }));
                        setOpenListPhinh(false);
                      }}>
                      {' '}
                      Xác nhận
                    </button>
                  </div>
                </div>
              )}
              <div className={cx('right__action__auto')} />
            </div>
          </div>
        </div>

        {/* {hoverData.isHover && (
          <ToolTipGame position={hoverData.position}>
            <p>test</p>
          </ToolTipGame>
        )} */}
      </div>
    </div>
  );
}
