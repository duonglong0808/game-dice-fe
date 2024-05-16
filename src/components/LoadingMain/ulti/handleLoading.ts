import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { getHistoryDiceGame, getPointGameKuAndMain, getUserInfo } from './api';
import { setDataUserLogin } from '@/lib/redux/app/userCurrent.slice';
import { setDataDiceInitiated, updateListDataDiceDetail } from '@/lib/redux/app/diceDetail.slice';

export const handleLoginGame = async (
  access_token: string,
  refresh_token: string,
  dispatch: any
) => {
  sessionStorage.setItem('access_token', access_token);
  sessionStorage.setItem('refresh_token', refresh_token);

  // localStorage.setItem('access_token', access_token);
  // localStorage.setItem('refresh_token', refresh_token);

  const userInfo = await getUserInfo();
  if (userInfo) {
    const dataPoint = await getPointGameKuAndMain();
    const dataDice = await getHistoryDiceGame();
    // console.log('🚀 ~ dataDice?.data?.dataHistory:', dataDice?.data?.dataHistory);

    const dataDiceDetail = dataDice?.data?.dataHistory?.map((item: any) => {
      return {
        ...item,
        diceDetailId: item?.id,
      };
    });
    dispatch(setDataDiceInitiated({ dataDiceDetail: dataDiceDetail || [] }));
    dispatch(setDataUserLogin({ ...userInfo?.data, ...dataPoint.data }));
    return true;
  } else {
    return false;
  }
};
