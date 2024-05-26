import { BaseAxios } from '@/lib';

export const betDice = (data: any) => {
  const axios = new BaseAxios(process.env.API_GAME_DICE);

  return axios.post('/history-play', data);
};
