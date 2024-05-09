import { createSlice } from '@reduxjs/toolkit';

export interface TransactionItem {
  id: number;
  type: string;
  name: string;
  nameAuthor: string;
  avtAuthor: string;
  nationalAuthor: string;
  idLive: string;
  idChat: string;
  createdAt: string;
  updatedAt: string;
}

interface DiceGameSlice {
  isInitData: boolean;
  diceGame: TransactionItem[];
  gameDiceId: number | undefined;
}

const DiceGameSlice = createSlice({
  name: 'diceGame',
  initialState: {
    isInitData: false,
    diceGame: [],
    gameDiceId: undefined,
  } as DiceGameSlice,
  reducers: {
    setDataDiceGame: (state, action) => {
      state.diceGame = action.payload?.data;

      state.isInitData = true;
    },

    resetDataDiceGame(state) {
      state.isInitData = false;
      state.diceGame = [];
    },
    setGameDiceId(state, action) {
      state.gameDiceId = action.payload.id;
    },
  },
});

export const { setDataDiceGame, resetDataDiceGame, setGameDiceId } = DiceGameSlice.actions;

export default DiceGameSlice.reducer;
