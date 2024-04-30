import { useAppDispatch, useAppSelector } from '@/lib';
import { useEffect } from 'react';
import { getAllGameDice } from './api';
import { setDataDiceGame } from '@/lib/redux/app/diceGame.slice';
import { TypeGameDice } from '@/constants';

export const useDiceGame = () => {
  const { isInitData, diceGame } = useAppSelector((state) => state.diceGame);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (!isInitData) {
        const res = await getAllGameDice();
        if (res?.data) {
          const { data } = res.data;

          dispatch(
            setDataDiceGame({
              data,
            })
          );
        }
      }
    }

    fetchData();
  }, [isInitData]);

  const dataDiceAfter = diceGame.map((dice) => {
    let typeGameText = 'Xóc đĩa';
    switch (dice.type) {
      case TypeGameDice.ChanLe:
        typeGameText = 'Chẵn lẻ';
        break;
      case TypeGameDice.Blockchain:
        typeGameText = 'Blockchain Xóc Đĩa';
        break;
      default:
        break;
    }

    return {
      id: dice.id,
      name: dice.name,
      typeText: typeGameText,
      type: dice.type,
      nameAuthor: dice.nameAuthor,
      national: dice.nationalAuthor,
      image: dice.avtAuthor,
      valueL: 997,
      valueC: 651,
    };
  });

  return {
    data: dataDiceAfter,
  };
};
