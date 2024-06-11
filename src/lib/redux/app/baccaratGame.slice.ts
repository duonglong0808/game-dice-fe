import { createSlice } from '@reduxjs/toolkit';

export interface BaccaratItem {
  id: number;
  type: string;
  name: string;
  nameAuthor: string;
  avtAuthor: string;
  nationalAuthor: string;
  idLive: string;
  idLiveMobile: string;
  idChat: string;
  createdAt: string;
  updatedAt: string;
}

interface BaccaratGameSliceDto {
  isInitData: boolean;
  baccaratGame: BaccaratItem[];
  gameBaccaratId: number | undefined;
}

const BaccaratGameSlice = createSlice({
  name: 'baccaratGame',
  initialState: {
    isInitData: false,
    baccaratGame: [],
    gameBaccaratId: undefined,
  } as BaccaratGameSliceDto,
  reducers: {
    setDataBaccarat: (state, action) => {
      console.log('🚀 ~ action:', action.payload);
      state.baccaratGame = action.payload?.data;
      state.isInitData = true;
      console.log('🚀 ~ state:', state);
    },
    // setRefreshBaccarat: (state, action) => {
    //   state.isInitData = action.payload;
    // },
    resetDataBaccarat(state) {
      state.isInitData = false;
      state.baccaratGame = [];
    },
    setGameBaccaratId(state, action) {
      state.gameBaccaratId = action.payload.id;
    },
  },
});

export const { setDataBaccarat, resetDataBaccarat, setGameBaccaratId } = BaccaratGameSlice.actions;

export default BaccaratGameSlice.reducer;
