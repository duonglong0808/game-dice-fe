'use client';

import { XocDiaSlider } from './components/DiceSlider';
import { XocDiaItem } from './components/DiceItemV1';
import { useDiceGame } from './ultils/handleGame';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib';
import XocDiaDetailsView from './components/DiceDetailView';
import { setGameDiceId } from '@/lib/redux/app/diceGame.slice';
import WebSocketSingleton from '@/lib/ws/wskInstance';
import { EventSocket, StatusDiceDetail, TypeEmitMessage, TypeUpdatePointUser } from '@/constants';
import {
  updateListDataDiceDetail,
  updateOrAddDataDiceDetail,
} from '@/lib/redux/app/diceDetail.slice';
import { updatePointUser } from '@/lib/redux/app/userCurrent.slice';

export default function GamePage(): JSX.Element {
  const { data } = useDiceGame();
  const { gameDeiceId } = useAppSelector((state) => state.diceGame);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const wsk = WebSocketSingleton.getInstance();
    wsk.checkAndConnectSocket();

    wsk.joinRoom();

    wsk.listeningEvent(EventSocket.Data, (data: any) => {
      console.log('🚀 ~ wsk.listeningEvent ~ data:', data);
      const type = data?.typeEmit;
      switch (type) {
        case TypeEmitMessage.updateStatusDice:
          dispatch(updateOrAddDataDiceDetail({ ...data }));
          // switch (data.status) {
          //   case StatusDiceDetail.shake:
          //     break;
          //   case StatusDiceDetail.bet:
          //     console.log(data);
          //     sessionStorage.setItem('gameDiceId', data.gameDiceId);
          //     sessionStorage.setItem('transaction', data.transaction);
          //     sessionStorage.setItem('diceDetailId', data.diceDetailId);

          //     alert('Thời gian đặt cược');
          //     break;
          //   case StatusDiceDetail.waitOpen:
          //     sessionStorage.removeItem('gameDiceId');
          //     sessionStorage.removeItem('transaction');
          //     sessionStorage.removeItem('diceDetailId');
          //     alert('Hết thời gian đặt cược, chờ mở bát');
          //     break;
          //   case StatusDiceDetail.check:
          //     alert('Kiểm tra kết quả');
          //     break;
          //   case StatusDiceDetail.check:
          //     alert('Kết thúc ván');
          //     break;

          //   default:
          //     break;
          // }
          break;
        case TypeEmitMessage.join:
          dispatch(updateListDataDiceDetail({ dataDiceDetail: data?.dataDiceDetail || [] }));
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
      wsk.disconnect();
    };
  }, []);

  return (
    <div className="w-full">
      {gameDeiceId ? (
        <XocDiaDetailsView gameDeiceId={gameDeiceId} />
      ) : (
        <>
          <XocDiaSlider />
          <div
            className="wrapper-games"
            style={{
              paddingTop: 10,
              paddingRight: 44,
              paddingLeft: 8,
            }}>
            <div className="grid grid-cols-3 gap-4">
              {data.map((item, index) => (
                <div onClick={() => dispatch(setGameDiceId({ id: item.id }))} key={index}>
                  <XocDiaItem key={index} {...item} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
