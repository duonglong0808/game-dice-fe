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
  updateListDataDiceCurrent,
  updateListDataDiceDetail,
  updateOrAddDataDiceDetail,
  updateOrAddDataDiceDetailCurrent,
} from '@/lib/redux/app/diceDetail.slice';
import { updatePointUser } from '@/lib/redux/app/userCurrent.slice';

export default function GamePage(): JSX.Element {
  const { data } = useDiceGame();
  const { gameDiceId } = useAppSelector((state) => state.diceGame);
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
      wsk.disconnect();
    };
  }, []);

  return (
    <div className="w-full">
      {gameDiceId ? (
        <XocDiaDetailsView gameDiceId={gameDiceId} />
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
