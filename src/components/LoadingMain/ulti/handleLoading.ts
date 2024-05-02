import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { getPointGameKuAndMain, getUserInfo } from './api';
import { setDataUserLogin } from '@/lib/redux/app/userCurrent.slice';

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

    dispatch(setDataUserLogin({ ...userInfo?.data, ...dataPoint.data }));
    return true;
  } else {
    return false;
  }
};
