import { ChatLiveMobile } from '@/app/mobile/game/components/ChatLiveMobile';
import { HistoryBPT } from '@/components/game-baccarat/HistoryBPT';
import { HistoryDotBaccarat } from '@/components/game-baccarat/HistoryDot';
import { HistoryLineBaccarat } from '@/components/game-baccarat/HistoryLine';
import { HistoryOX } from '@/components/game-baccarat/HistoryOX';
import { HistoryRingBaccarat } from '@/components/game-baccarat/HistoryRing';
import { ResultGameBaccarat } from '@/components/game-baccarat/ResultGameBaccarat';
import ChipsList from '@/components/game/ChipList/index.';
import CountDownBetBaccarat from '@/components/game/CountDownBaccarat';
import { ShowMessageLive } from '@/components/game/ShowMessageLive';
import { StatusBaccarat, dataListChipsStatistics } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/lib';
import { resetDataBetBaccarat } from '@/lib/redux/app/baccaratDetail.slice';
import { updatePointUser } from '@/lib/redux/app/userCurrent.slice';
import { setIndexChipsRedux } from '@/lib/redux/system/settingSys';
import { betDiceAndBaccarat } from '@/ultils/api';
import { useHandleMessageBaccaratWsk } from '@/ultils/handleDetailBaccarat';
import classNames from 'classnames';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export function BaccaratDetailViewMobile(): JSX.Element {
  // Initialize
  const wsk = useHandleMessageBaccaratWsk();

  const { baccaratGame } = useAppSelector((state) => state.baccaratGame);
  const router = useRouter();
  const { dataBaccaratDetailCurrent, dataBetCurrent } = useAppSelector(
    (state) => state.baccaratDetail
  );
  const { gameBaccaratId } = useAppSelector((state) => state.baccaratGame);
  const dataBaccaratDetailById = dataBaccaratDetailCurrent.find(
    (d) => d.gameBaccaratId == gameBaccaratId
  );
  const gameBaccaratById = baccaratGame.find((i) => i.id == gameBaccaratId);
  const dataStatusBaccarat =
    typeof dataBaccaratDetailById?.status == 'string'
      ? dataBaccaratDetailById?.status?.split(':')
      : [dataBaccaratDetailById?.status];
  const statsBaccaratDetail = Number(dataStatusBaccarat[0]);

  useEffect(() => {
    if (!gameBaccaratById) {
      // TODO: rederic to error if not data game
      // router.replace('/mobile/game');
      router.replace('/error');
    }
  }, []);

  //   Chips
  const [openChipList, setOpenChipList] = useState(false);
  const indexChipsRedux = useAppSelector((state) => state.diceDetail.indexChips);
  const [indexChips, setIndexChips] = useState<number[]>(indexChipsRedux);
  const dispatch = useAppDispatch();

  // Point user
  const { gamePoint } = useAppSelector((state) => state.userCurrent);
  const gamePointRef = useRef(gamePoint);

  // Bet
  const [totalPointBet, setTotalPointBet] = useState(0);
  const dataBetConfirmOld = useRef<{ point: number; answer: number }[]>([]);
  const [currentChip, setCurrentChip] = useState<number>();
  const [optionBetActive, setOptionBetActive] = useState(0);

  const handleConfirmBet = async () => {
    const transaction = dataBaccaratDetailById?.transaction || 1;
    const gameBaccaratId = dataBaccaratDetailById?.gameBaccaratId || 1;
    const baccaratDetailId = dataBaccaratDetailById?.baccaratDetailId || 1;
    const dataBetTg = [...dataBetCurrent];
    if (
      dataBetTg.length &&
      transaction &&
      gameBaccaratId &&
      Number(statsBaccaratDetail) == StatusBaccarat.bet
    ) {
      dispatch(resetDataBetBaccarat());
      const reqBets = await Promise.all(
        dataBetTg.map(async (bet) => {
          const data = {
            transaction,
            gameBaccaratId,
            baccaratDetailId,
            point: bet.point,
            answer: bet.answer,
            game: 'mc-baccarat',
          };
          const req = await betDiceAndBaccarat(data);

          return {
            answer: bet.answer,
            point: req?.data ? bet.point : 0,
          };
        })
      );

      // const newDataBetConfirm = [...dataBetConfirmOld.current];
      let totalBetSuc = 0;
      reqBets.map((item) => {
        totalBetSuc += item.point;
        const checkExits = dataBetConfirmOld.current.find((i) => i.answer == item.answer);
        if (checkExits) checkExits.point = item.point + checkExits.point;
        dataBetConfirmOld.current.push(item);
      });
      setTotalPointBet((pre) => pre + totalBetSuc);
      dispatch(updatePointUser({ gamePoint: -totalBetSuc }));
    }
  };

  // Handle Message
  const [message, setMessage] = useState('');
  const statsBaccaratDetailRef = useRef(statsBaccaratDetail);
  useEffect(() => {
    if (statsBaccaratDetail != statsBaccaratDetailRef.current) {
      statsBaccaratDetailRef.current = statsBaccaratDetail;
      switch (statsBaccaratDetail) {
        case StatusBaccarat.bet:
          setMessage('Đã bắt đầu, vui lòng cược!');
          break;
        case StatusBaccarat.waitOpen:
          dataBetConfirmOld.current = [];
          dispatch(resetDataBetBaccarat());
          setMessage('Đã kết thúc đặt cược, vui lòng chờ mở bài');
          break;
        case StatusBaccarat.end:
          console.log(
            '🚀 ~ LiveStream ~ gamePoint - gamePointRef.current:',
            gamePoint,
            gamePointRef.current
          );
          if (totalPointBet != 0) {
            if (gamePoint > gamePointRef.current)
              setMessage(String(`+${Math.ceil(gamePoint - gamePointRef.current + totalPointBet)}`));
            else setMessage(String(gamePoint - gamePointRef.current));
            gamePointRef.current = gamePoint;
            setTotalPointBet(0);
          }
          break;
        default:
          break;
      }
    }
  }, [statsBaccaratDetail]);

  return (
    <div>
      {message ? (
        <ShowMessageLive message={message} statsGameDetail={statsBaccaratDetail} />
      ) : (
        <></>
      )}
      <CountDownBetBaccarat />
      <div className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden bg-[#111]">
        <iframe
          allow="autoplay; encrypted-media"
          // allowFullScreen
          className="w-svw h-svh scale-[1.04]"
          // className="w-full h-[35svh] "
          src={gameBaccaratById?.idLiveMobile}
          // src={'https://gat6.vnskuvideo.com/ios.html?id=71101'}
        ></iframe>
        <div className="absolute top-0 left-0 right-0 h-[calc(100svw*0.49)]"></div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-[6] bg-black top-[calc(100svw*0.49)]">
        <div
          className="flex flex-col h-full"
          //  style={{ height: 'calc(100svw*0.49)' }}
        >
          <div className="flex h-[30px] items-center justify-between">
            <div className="flex items-center">
              <span className="text-white">Cược :</span>
              <span className="ml-1 text-[#ffd100] text-xl">{Math.floor(totalPointBet)}</span>
            </div>
            <div className="flex h-full">
              <button className='w-10 h-full bg-[url(/Areas/Mobile/Images/VN/btn_switch.svg)] bg-[length:auto_65%] bg-no-repeat bg-center relative after:content-[""] after:absolute after:top-2 after:bottom-2 after:w-[1px] after:right-0 after:bg-[#333]'></button>
              <button className='w-10 h-full bg-[url(/Areas/Mobile/Images/VN/btn_navNormal.svg)] bg-[length:auto_90%] bg-no-repeat bg-center relative after:content-[""] after:absolute after:top-2 after:bottom-2 after:w-[1px] after:right-0 after:bg-[#333]'></button>
              <button className='w-10 h-full bg-[url(/Areas/Mobile/Images/VN/icon_verifyLive.png)] bg-[length:auto_65%] bg-no-repeat bg-center relative after:content-[""] after:absolute after:top-2 after:bottom-2 after:w-[1px] after:right-0 after:bg-[#333]'></button>
              <button className='w-10 h-full bg-[url(/Areas/Mobile/Images/VN/btn_gamePrompt.svg)] bg-[length:auto_65%] bg-no-repeat bg-center relative after:content-[""] after:absolute after:top-2 after:bottom-2 after:w-[1px] after:right-0 after:bg-[#333]'></button>
              <button className='w-10 h-full bg-[url(/Areas/Mobile/Images/VN/btn_limit.svg)] bg-[length:auto_65%] bg-no-repeat bg-center relative after:content-[""] after:absolute after:top-2 after:bottom-2 after:w-[1px] after:right-0 after:bg-[#333]'></button>
            </div>
          </div>
          <div
            className="flex-1 flex flex-col"
            style={{ height: 'calc(100svh - 100svw*0.49 - 30px)' }}>
            <div
              className=" bg-white w-full flex justify-center p-[3px] relative"
              style={{ height: 'calc(100% - 10.45svh - 188px)' }}>
              <ResultGameBaccarat />
              <div className="absolute left-0 top-0 bottom-0 h-fit bg-[#00000040] m-auto rounded-tr-[8px] rounded-br-[8px]">
                <div className="w-[10px] h-[10px] my-5 cursor-pointer mx-2  border-t-[3px] border-l-[3px] rotate-[-45deg] border-[#fff]"></div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 h-fit bg-[#00000040] m-auto rounded-tl-[8px] rounded-bl-[8px]">
                <div className="w-[10px] h-[10px] my-5 cursor-pointer mx-2  border-t-[3px] border-l-[3px] rotate-[135deg] border-[#fff]"></div>
              </div>
              {optionBetActive == 0 ? (
                <div className="flex-1 flex bg-[#f3f3f3] flex-wrap w-full h-full border-t-[1px] border-l-[1px] border-[#bcbcbc] rounded-sm">
                  <div className="basis-1/5 h-[49.5%]">
                    <div className="border-r-[1px] h-full text-[#666] border-b-[1px] border-[#bcbcbc] font-bold relative flex flex-col justify-center items-center text-center text-sm">
                      <span className="">Con</span>
                      <span className="">Long Bảo</span>
                      <span className="absolute bottom-3 left-0 right-0 block text-[#4c8bd080]">
                        Max 1:30
                      </span>
                    </div>
                  </div>
                  <div className="basis-1/5 h-[49.5%]">
                    <div className="border-r-[1px] h-full border-b-[1px] border-[#bcbcbc] font-bold relative flex items-center text-center text-sm">
                      <span className="block mx-auto text-[#666] text-base">Con Đôi</span>
                      <span className="absolute bottom-3 left-0 right-0 block text-[#4c8bd080]">
                        1:11
                      </span>
                    </div>
                  </div>
                  <div className="basis-1/5 h-[49.5%]">
                    <div className="border-r-[1px] h-full border-b-[1px] border-[#bcbcbc] font-bold relative flex items-center text-center text-sm">
                      <span className="block mx-auto text-[#ff9c00] text-base">SUPER 6</span>
                      <span className="absolute bottom-3 left-0 right-0 block text-[#4c8bd080]">
                        1:12 / 1:20
                      </span>
                    </div>
                  </div>
                  <div className="basis-1/5 h-[49.5%]">
                    <div className="border-r-[1px] h-full border-b-[1px] border-[#bcbcbc] font-bold relative flex items-center text-center text-sm">
                      <span className="block mx-auto text-[#666] text-base">Cái đôi</span>
                      <span className="absolute bottom-3 left-0 right-0 block text-[#4c8bd080]">
                        1:11
                      </span>
                    </div>
                  </div>
                  <div className="basis-1/5 h-[49.5%]">
                    <div className="border-r-[1px] h-full text-[#666] border-b-[1px] border-[#bcbcbc] font-bold relative flex flex-col justify-center items-center text-center text-sm">
                      <span className="">Cái</span>
                      <span className="">Long Bảo</span>
                      <span className="absolute bottom-3 left-0 right-0 block text-[#4c8bd080]">
                        Max 1:30
                      </span>
                    </div>
                  </div>
                  <div className="basis-full h-[1%] flex">
                    <div className="w-[43%] bg-[#0036ff]"></div>
                    <div className="flex-1 bg-[#fe0000]"></div>
                  </div>
                  <div className="basis-1/3 h-[49.5%]">
                    <div className="h-full text-[#666] border-t-[1px] border-r-[1px] border-b-[1px] border-[#bcbcbc] font-bold relative flex flex-col justify-center items-center text-center text-sm">
                      <span className="text-[#0036ff] text-3xl">Con</span>
                      <span className="absolute bottom-3 left-0 right-0 block text-[#4c8bd080]">
                        1:1
                      </span>
                    </div>
                  </div>
                  <div className="basis-1/3 h-[49.5%]">
                    <div className="h-full text-[#666] border-t-[1px] border-r-[1px] border-b-[1px] border-[#bcbcbc] font-bold relative flex flex-col justify-center items-center text-center text-sm">
                      <span className="text-[#01ab48] text-3xl">Hòa</span>
                      <span className="absolute bottom-3 left-0 right-0 block text-[#4c8bd080]">
                        1:8
                      </span>
                    </div>
                  </div>
                  <div className="basis-1/3 h-[49.5%]">
                    <div className="h-full text-[#666] border-t-[1px] border-r-[1px] border-b-[1px] border-[#bcbcbc] font-bold relative flex flex-col justify-center items-center text-center text-sm">
                      <span className="text-[#fe0000] text-3xl">Cái</span>
                      <span className="absolute bottom-3 left-0 right-0 block text-[#4c8bd080]">
                        1:0.95
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
              {optionBetActive == 1 ? (
                <div className="flex-1 flex flex-col bg-[#f3f3f3] flex-wrap w-full h-full border-t-[1px] border-l-[1px] border-[#bcbcbc] rounded-sm"></div>
              ) : (
                <></>
              )}
              {optionBetActive == 3 ? (
                <div className="flex-1 flex flex-col bg-[#f3f3f3] flex-wrap w-full h-full border-t-[1px] border-l-[1px] border-[#bcbcbc] rounded-sm"></div>
              ) : (
                <></>
              )}
              {optionBetActive == 4 ? (
                <div className="flex-1 flex flex-col bg-[#f3f3f3] flex-wrap w-full h-full border-t-[1px] border-l-[1px] border-[#bcbcbc] rounded-sm"></div>
              ) : (
                <></>
              )}
            </div>

            <div className="bg-white flex items-center relative h-[5.9svh]">
              <div className="flex-1 w-[calc(100%_-_56px)] h-full">
                <ChipsList
                  alwayActive={true}
                  curChip={Number(currentChip)}
                  setChips={(chip) => setCurrentChip(chip)}
                />
              </div>
              <div className=" w-14 h-full">
                <Image
                  onClick={() => setOpenChipList(true)}
                  alt="bing"
                  src={'/Areas/Mobile/Images/blingChip/icon_blingChip_Set.png'}
                  width={57}
                  height={57}
                  className="h-full object-contain"
                />
                {openChipList ? (
                  <div className="absolute left-0 right-0 bottom-full m-auto h-fit z-10 bg-[#141414]">
                    <div className="text-center relative m-2 border-b-[1px] border-[#356492]">
                      <span className="text-white flex justify-center mb-1">
                        Cài đặt phỉnh
                        <span className=" bg-[url(/Areas/Mobile/Images/img_chipHint.svg)] block bg-no-repeat w-5 h-5 bg-center ml-2"></span>
                      </span>
                      <span
                        onClick={() => setOpenChipList(false)}
                        className="text-white w-[40px] text-xl absolute -top-[2px] bottom-0 right-0 ">
                        X
                      </span>
                    </div>
                    <div className="border-b-[1px] border-[#356492] mx-2">
                      <div className="grid grid-cols-4">
                        {dataListChipsStatistics.map((chip, index) => (
                          <div className="flex justify-center">
                            <Image
                              alt="chip phinh"
                              src={indexChips.includes(index) ? chip.on : chip.off}
                              key={index}
                              width={68}
                              height={68}
                              className="w-[56px] h-[56px] text-center"
                              onClick={() => {
                                if (indexChips.includes(index)) {
                                  setIndexChips((pre) => pre.filter((c) => c !== index));
                                } else if (indexChips.length < 8) {
                                  setIndexChips((pre) => [...pre, index]);
                                }
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="m-2 flex justify-between items-center">
                      <span className=" text-[#ffc800]">Chọn tối đa 8 phỉnh</span>
                      <button
                        onClick={() => {
                          dispatch(setIndexChipsRedux({ indexChips }));
                          setOpenChipList(false);
                        }}
                        className="px-2 py-1 bg-[#3678b7] text-white rounded-sm">
                        Xác nhận
                      </button>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="flex border-t-[1px] items-center justify-around h-[5svh] min- border-b-[1px] border-[#ccc] bg-[#f3f3f3] w-full mx-auto">
              <button
                onClick={() => {
                  () => {};
                }}
                className={classNames(
                  'w-[24%] h-[67%] text-sm text-white rounded-sm border-[1px] border-[#fff] bg-[url(/Areas/Mobile/Images/btn_cancel.svg)] bg-no-repeat ml-2 pl-2 bg-[length:auto_65%]',
                  {
                    'bg-[#929292] shadow-[0_0_0_4px_#929292]':
                      statsBaccaratDetail !== StatusBaccarat.bet,
                  },
                  {
                    'bg-[#ff9401] shadow-[0_0_0_4px_#ff9401]':
                      statsBaccaratDetail == StatusBaccarat.bet,
                  }
                )}
                style={{ backgroundPositionX: '13%', backgroundPositionY: 'center' }}>
                Hủy
              </button>
              <button
                className={classNames(
                  'w-[24%] h-[67%] text-sm text-white rounded-sm border-[1px] border-[#fff] bg-[url(/Areas/Mobile/Images/btn_repeat.svg)] bg-no-repeat bg-[#1e8dde] shadow-[0_0_0_4px_#1e8dde] ml-3 pl-5 bg-[length:auto_65%]',
                  {
                    'bg-[#929292] shadow-[0_0_0_4px_#929292]':
                      statsBaccaratDetail !== StatusBaccarat.bet,
                  }
                )}
                style={{ backgroundPositionX: '13%', backgroundPositionY: 'center' }}>
                Lặp lại
              </button>
              <button
                onClick={() => {}}
                className={classNames(
                  'w-[24%] h-[67%] text-sm text-white rounded-sm border-[1px] border-[#fff] bg-[url(/Areas/Mobile/Images/btn_confirm.svg)] bg-no-repeat bg-[#0f9e4f] shadow-[0_0_0_4px_#0f9e4f] ml-3 pl-2 bg-[length:auto_65%]',
                  {
                    'bg-[#929292] shadow-[0_0_0_4px_#929292]':
                      statsBaccaratDetail !== StatusBaccarat.bet,
                  }
                )}
                style={{ backgroundPositionX: '13%', backgroundPositionY: 'center' }}>
                OK
              </button>
              <button className="w-[23%] h-[88%] flex justify-start items-center text-white text-center bg-contain rounded-sm bg-[url(/Areas/Mobile/Images/icon_change.svg)] bg-no-repeat ml-3">
                <span className="block ml-2 text-sm">Đổi bàn</span>
              </button>
            </div>

            <div className="w-full">
              <div className="flex bg-[#e5e5e5] h-7">
                <span className="block w-2 mx-2 bg-[url(/Areas/Mobile/Images/btn_MT_gameArrow.svg)] bg-no-repeat bg-center "></span>
                <div className="flex-1 flex items-center overflow-auto">
                  <div className="flex mr-4 items-baseline">
                    <span className="text-[#f00] mr-3 text-sm font-semibold">L</span>
                    <span className="text-black text-sm font-semibold">552</span>
                  </div>
                  <div className="flex mr-4 items-baseline">
                    <span className="text-[#0036ff] mr-3 text-sm font-semibold">C</span>
                    <span className="text-black text-sm font-semibold">522</span>
                  </div>
                  <div className="flex mr-4 items-baseline">
                    <span className="text-[#f00] mr-3 text-sm font-semibold">T</span>
                    <span className="text-black text-sm font-semibold">422</span>
                  </div>
                  <div className="flex mr-4 items-baseline">
                    <span className="text-[#0036ff] mr-3 text-sm font-semibold">X</span>
                    <span className="text-black text-sm font-semibold">398</span>
                  </div>

                  <div className="flex mr-4 items-end">
                    <span className="relative bottom-[1px] w-[15px] h-[15px] mr-2 bg-contain bg-[url(/Areas/Mobile/Images/report/CD/img_CDs0.svg)] bg-no-repeat bg-center"></span>
                    <span className="text-black text-sm font-semibold">62</span>
                  </div>
                  <div className="flex mr-4 items-end">
                    <span className="relative bottom-[1px] w-[15px] h-[15px] mr-2 bg-contain bg-[url(/Areas/Mobile/Images/report/CD/img_CDs1.svg)] bg-no-repeat bg-center"></span>
                    <span className="text-black text-sm font-semibold">280</span>
                  </div>
                  <div className="flex mr-4 items-end">
                    <span className="relative bottom-[1px] w-[15px] h-[15px] mr-2 bg-contain bg-[url(/Areas/Mobile/Images/report/CD/img_CDs2.svg)] bg-no-repeat bg-center"></span>
                    <span className="text-black text-sm font-semibold">445</span>
                  </div>
                  <div className="flex mr-4 items-end">
                    <span className="relative bottom-[1px] w-[15px] h-[15px] mr-2 bg-contain bg-[url(/Areas/Mobile/Images/report/CD/img_CDs3.svg)] bg-no-repeat bg-center"></span>
                    <span className="text-black text-sm font-semibold">293</span>
                  </div>
                  <div className="flex mr-4 items-end">
                    <span className="relative bottom-[1px] w-[15px] h-[15px] mr-2 bg-contain bg-[url(/Areas/Mobile/Images/report/CD/img_CDs4.svg)] bg-no-repeat bg-center"></span>
                    <span className="text-black text-sm font-semibold">60</span>
                  </div>
                </div>
                <span className="block px-5  bg-[url(/Areas/Mobile/Images/icon_fingerblack.svg)] bg-no-repeat  border-l-[1px] border-[#ccc] bg-[length:20px]"></span>
              </div>
            </div>

            <div className="flex">
              <div className="w-[35%]">
                <HistoryBPT
                  baccaratId={Number(gameBaccaratId)}
                  col={6}
                  row={6}
                  initType="string"
                  showOption
                  isLive
                />
              </div>
              <div className="flex w-[65%]">
                <div className="w-[87%]">
                  <HistoryOX baccaratId={Number(gameBaccaratId)} col={19} row={6} isLive />
                  <div className="flex">
                    <HistoryRingBaccarat col={5} row={3} baccaratId={Number(gameBaccaratId)} />
                    <HistoryDotBaccarat col={5} row={3} baccaratId={Number(gameBaccaratId)} />
                    <HistoryLineBaccarat col={5} row={3} baccaratId={Number(gameBaccaratId)} />
                  </div>
                </div>
                <div className="w-[13%] bg-white">
                  <div className="h-[50%] border-[1px] border-t-0 text-center border-[#979797]">
                    <span className="block text-[#db1002] font-bold text-[10px] py-1">Hỏi Cái</span>
                    <div className="flex justify-center items-center mx-[1px] rounded-xl p-1 bg-[#dddddd] px-[2px]">
                      <span className="block rounded-full w-[5.5px] h-[5.5px] mr-[3px] border-[2px] border-[#db1002]"></span>
                      <span className="block rounded-full w-[5.5px] h-[5.5px] mr-[3px] bg-[#db1002]"></span>
                      <span className=" block bg-[#db1002] w-[2px] h-[5px] rotate-[21deg] relative top-[0.5px]"></span>
                    </div>
                  </div>
                  <div className="h-[50%] border-[1px] border-b-0 text-center border-[#979797]">
                    <span className="block text-[#0403cb] font-bold text-[10px] py-1">Hỏi Con</span>
                    <div className="flex justify-center items-center mx-[1px] rounded-xl p-1 bg-[#dddddd] px-[2px]">
                      <span className="block rounded-full w-[5.5px] h-[5.5px] mr-[3px] border-[2px] border-[#0403cb]"></span>
                      <span className="block rounded-full w-[5.5px] h-[5.5px] mr-[3px] bg-[#0403cb]"></span>
                      <span className=" block bg-[#0403cb] w-[2px] h-[5px] rotate-[21deg] relative top-[0.5px]"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ChatLiveMobile />
          </div>
        </div>
      </div>
    </div>
  );
}
