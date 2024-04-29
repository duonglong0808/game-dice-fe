import { BaseAxios } from '@/lib';

export const getUserInfo = async () => {
  const axios = new BaseAxios();
  return axios.get('auth/userInfo');
};
