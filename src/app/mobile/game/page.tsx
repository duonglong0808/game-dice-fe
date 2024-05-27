'use client';

import Image from 'next/image';
import { useDiceGame } from './ultils/handleGame';
import classNames from 'classnames';
import {
  EventSocket,
  StatusDiceDetail,
  TypeEmitMessage,
  TypeGameDice,
  TypeUpdatePointUser,
} from '@/constants';
import { EvenOddResult } from '@/app/game/components/EvenOddResult';
import { DiceResultTX } from '@/app/game/components/DiceResultTX';
import { useRouter } from 'next/navigation';
import { HeaderGameMobile } from './components/Header';
import { useAppDispatch } from '@/lib';
import { useEffect } from 'react';
import WebSocketSingleton from '@/lib/ws/wskInstance';
import {
  updateListDataDiceCurrent,
  updateListDataDiceDetail,
  updateOrAddDataDiceDetail,
  updateOrAddDataDiceDetailCurrent,
} from '@/lib/redux/app/diceDetail.slice';
import { updatePointUser } from '@/lib/redux/app/userCurrent.slice';
import { setGameDiceId } from '@/lib/redux/app/diceGame.slice';

export default function PageGame(): JSX.Element {
  const { data } = useDiceGame();
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('Start 1');
    const wsk = WebSocketSingleton.getInstance();
    wsk.checkAndConnectSocket();

    wsk.joinRoom();

    wsk.listeningEvent(EventSocket.Data, (data: any) => {
      console.log('🚀 ~ wsk.listeningEvent ~ data:', data);
      const type = data?.typeEmit;
      switch (type) {
        case TypeEmitMessage.updateStatusDice:
          if (typeof data.totalRed == 'number') {
            const result = data.totalRed;
            const arrBetActive = [];
            arrBetActive.push(`p_${result}`);
            switch (result) {
              case 0:
              case 4:
                arrBetActive.push(`p_${-1}`);
                break;
              default:
                break;
            }

            if (result % 2 == 0) {
              arrBetActive.push(`p_chan`);
            } else {
              arrBetActive.push(`p_le`);
            }
            if (result > 2) {
              arrBetActive.push(`p_tai`);
            } else {
              arrBetActive.push(`p_xiu`);
            }

            dispatch(updateOrAddDataDiceDetailCurrent({ ...data, arrBetActive }));
          } else {
            dispatch(updateOrAddDataDiceDetailCurrent({ ...data, arrBetActive: [] }));
          }
          if (data.status == StatusDiceDetail.end) {
            dispatch(updateOrAddDataDiceDetail({ ...data }));
          }
          break;
        case TypeEmitMessage.join:
          dispatch(updateListDataDiceDetail({ dataDiceDetail: data?.dataDiceDetail || [] }));
          dispatch(updateListDataDiceCurrent({ dataDiceDetail: data?.dataDiceDetail || [] }));
          break;
        case TypeEmitMessage.updatePoint:
          console.log('Update point', data);
          switch (data.type) {
            case TypeUpdatePointUser.up:
              dispatch(
                updatePointUser({
                  gamePoint: data.points,
                })
              );
              break;
            case TypeUpdatePointUser.down:
              // Xử lý khi thua
              // alert('Ván này bạn đã thua ');
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    });

    return () => {
      console.log('leave 1');
      wsk.disconnect();
    };
  }, []);

  return (
    <div>
      <HeaderGameMobile isShowSlide={true} />

      <div className="">
        <ul className="fixed z-[2] bottom-0 top-[84px] w-[64px] px-1 border-r-[1px] border-[#333] bg-[#000] py-2">
          <li className="mb-1 w-full h-fit flex justify-center items-center">
            <button className="p-1 w-full text-center border-[1px] rounded-lg border-[#8099ff] shadow-[0_0_3px_#9e865e,0_0_3px_#9e865e_inset]">
              <Image
                alt=""
                src={'/Areas/Mobile/Images/menuImg_cd_02.svg'}
                width={28}
                height={28}
                className="mx-auto pb-[2px]"
              />
              <h4 className="text-[#b0c9ff] text-[10px]">Xóc đĩa</h4>
            </button>
          </li>
          <li className="mb-1 w-full h-fit flex justify-center items-center">
            <button className="p-1 w-full text-center">
              <Image
                alt=""
                src={'/Areas/Mobile/Images/menuImg_bac.svg'}
                width={28}
                height={28}
                className="mx-auto pb-[2px]"
              />
              <h4 className="text-[#6aff00] text-[10px]">
                China <br></br> Baccarat
              </h4>
            </button>
          </li>

          <li className="mb-1 w-full h-fit flex justify-center items-center">
            <button className="p-1 w-full text-center">
              <Image
                alt=""
                src={'/Areas/Mobile/Images/menuImg_V_bac.svg'}
                width={28}
                height={28}
                className="mx-auto pb-[2px]"
              />
              <h4 className="text-[#ffd100] text-[10px]">
                MC <br></br> Baccarat
              </h4>
            </button>
          </li>
          <li className="mb-1 w-full h-fit flex justify-center items-center">
            <button className="p-1 w-full text-center">
              <Image
                alt=""
                src={'/Areas/Mobile/Images/menuImg_bac.svg'}
                width={28}
                height={28}
                className="mx-auto pb-[2px]"
              />
              <h4 className="text-[#6aff00] text-[10px]">
                Blockchain <br></br>Baccarat
              </h4>
            </button>
          </li>
          <li className="mb-1 w-full h-fit flex justify-center items-center">
            <button className="p-1 w-full text-center">
              <Image
                alt=""
                src={'/Areas/Mobile/Images/menuImg_many_02.gif'}
                width={28}
                height={28}
                className="mx-auto pb-[2px]"
              />
              <h4 className="text-[#00a8ff] text-[10px]">Nhiều bàn</h4>
            </button>
          </li>
          <li className="mb-1 w-full h-fit flex justify-center items-center">
            <button className="p-1 w-full text-center">
              <Image
                alt=""
                src={'/Areas/Mobile/Images/menuImg_sb.svg'}
                width={28}
                height={28}
                className="mx-auto pb-[2px]"
              />
              <h4 className="text-white text-[10px]">Sic bo</h4>
            </button>
          </li>
          <li className="mb-1 w-full h-fit flex justify-center items-center">
            <button className="p-1 w-full text-center">
              <Image
                alt=""
                src={'/Areas/Mobile/Images/menuImg_dt.svg'}
                width={28}
                height={28}
                className="mx-auto pb-[2px]"
              />
              <h4 className="text-white text-[10px]">Rồng hổ</h4>
            </button>
          </li>
          <li className="mb-1 w-full h-fit flex justify-center items-center">
            <button className="p-1 w-full text-center">
              <Image
                alt=""
                src={'/Areas/Mobile/Images/menuImg_gf.svg'}
                width={28}
                height={28}
                className="mx-auto pb-[2px]"
              />
              <h4 className="text-white text-[10px]">Tr Kim Hoa</h4>
            </button>
          </li>
          <li className="mb-1 w-full h-fit flex justify-center items-center">
            <button className="p-1 w-full text-center">
              <Image
                alt=""
                src={'/Areas/Mobile/Images/menuImg_lp.gif'}
                width={28}
                height={28}
                className="mx-auto pb-[2px]"
              />
              <h4 className="text-[#b0c9ff] text-[10px]">Roulette</h4>
            </button>
          </li>
          <li className="mb-1 w-full h-fit flex justify-center items-center">
            <button className="p-1 w-full text-center">
              <Image
                alt=""
                src={'/Areas/Mobile/Images/menuImg_B_tk.svg'}
                width={28}
                height={28}
                className="mx-auto pb-[2px]"
              />
              <h4 className="text-white text-[10px]">
                Blockchain <br></br> Ba Tây
              </h4>
            </button>
          </li>
          <li className="mb-1 w-full h-fit flex justify-center items-center">
            <button className="p-1 w-full text-center">
              <Image
                alt=""
                src={'/Areas/Mobile/Images/menuImg_others.svg'}
                width={28}
                height={28}
                className="mx-auto pb-[2px]"
              />
              <h4 className="text-white text-[10px]">Khác</h4>
            </button>
          </li>
        </ul>
        <div className="w-[calc(100%-64px)]  h-[calc(100svh-84px)] fixed top-[84px] right-0 bottom-0 ml-auto overflow-y-scroll bg-black">
          <div className="flex-1 pt-1 px-1 flex flex-col ">
            {data.map((item, index) => {
              let imageNational = '';
              switch (item.national?.toLowerCase()) {
                case 'vn':
                  imageNational = "url('/Content/images/bg_anchor_04.png')";
                  break;
                case 'phl':
                  imageNational = "url('/Content/images/bg_anchor_03.png')";
                  break;
                default:
                  break;
              }

              return (
                <div
                  key={index}
                  onClick={() => {
                    dispatch(setGameDiceId({ id: item.id }));
                    router.push(`/mobile/game/${item.id}`);
                  }}
                  className="w-full mb-1 rounded-sm border-[1px] border-[#484848] relative bg-gradient-to-b-[#2a2a2a_0%,#131313_100%]">
                  <div className="flex justify-between bg-[#484647]">
                    <div className="flex text-[12px] items-center px-1">
                      <span
                        className={classNames('block', {
                          'text-[#49e5d6]': item.type == TypeGameDice.Blockchain,
                          'text-white': !(item.type == TypeGameDice.Blockchain),
                        })}>
                        {item.typeText}
                      </span>
                      <span className="block text-white ml-1">{item.name}</span>
                    </div>
                    <div className="flex items-center py-1">
                      <div className="flex items-center justify-center mr-2">
                        <span className="w-4 h-4 text-[11px] rounded-full text-sm text-white bg-[#dc0000] text-center flex items-center justify-center">
                          L
                        </span>
                        <span className="text-sm text-white ml-1">{item.valueL}</span>
                      </div>
                      <div className="flex items-center justify-center mr-2">
                        <span className="w-4 h-4 text-[11px] rounded-full text-sm text-white bg-[#0036ff] text-center relative flex items-center justify-center">
                          C
                        </span>
                        <span className="text-sm text-white ml-1">{item.valueC}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[94px] m-[3px]">
                    <div className="relative w-[32%] ">
                      <Image alt="avatar" src={item.image} fill />
                      {imageNational && (
                        <div
                          className={`absolute bg-no-repeat w-full left-0 right-0 bottom-[2px]`}
                          style={{ background: `${imageNational} no-repeat` }}>
                          <span className="block text-end mr-7 text-white font-semibold text-sm">
                            {item.nameAuthor}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex ml-1 l">
                      <div className="basis-1/2">
                        <div className="border-r-[1px] border-[#979797]">
                          <EvenOddResult gameDiceId={item.id} />
                        </div>
                      </div>

                      <div className="basis-1/2">
                        <DiceResultTX gameDiceId={item.id} />
                      </div>
                      {/* <div className="basis-1/2">
                      <EvenOddResult gameDiceId={item.id} />
                    </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
