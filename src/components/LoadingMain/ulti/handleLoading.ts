import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { getUserInfo } from './api';
import { setDataUserLogin } from '@/lib/redux/app/userCurrent.slice';

export const handleLoginGame = async (
  access_token: string,
  refresh_token: string,
  dispatch: any
) => {
  localStorage.setItem('access_token', access_token);
  localStorage.setItem('refresh_token', refresh_token);

  const userInfo = await getUserInfo();
  if (userInfo) {
    dispatch(setDataUserLogin(userInfo?.data));
    return true;
  } else {
    return false;
  }
};
