import { BaseAxios } from '@/lib';

export const betGameDice = async (data: any) => {
  const axios = new BaseAxios(process.env.API_GAME_DICE);
  return await axios.post('/history-play', data);
};
