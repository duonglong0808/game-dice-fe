import { BaseAxios } from '@/lib';

export const transferPoint = async (
  gamePointTransfer: number,
  gamePointReceive: number,
  points: number
) => {
  const axios = new BaseAxios();
  return axios.post('/user-point', {
    gamePointTransfer,
    gamePointReceive,
    points,
  });
};
