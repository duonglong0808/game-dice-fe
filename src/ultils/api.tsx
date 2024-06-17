import { BaseAxios } from '@/lib';

export const betDiceAndBaccarat = (data: any) => {
  const axios = new BaseAxios(process.env.API_GAME_DICE);

  return axios.post('/history-play', data);
};

export const getAllGameBaccarat = async () => {
  const axios = new BaseAxios(process.env.API_GAME_DICE);

  let url = `/baccarat?limit=10&page=1&sort=id&typeSort=ASC`;

  return axios.get(url);
};

export const getAllGameDice = async () => {
  const axios = new BaseAxios(process.env.API_GAME_DICE);
  return axios.get('/dice?sort=type&typeSort=ASC');
};
