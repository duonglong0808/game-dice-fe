import { BaseAxios } from '@/lib';

export const getAllGameDice = async () => {
  const axios = new BaseAxios(process.env.API_GAME_DICE);
  return axios.get('/dice?sort=type&typeSort=ASC');
  // return axios.get('/dice?sort=type&typeSort=ASC');
};
