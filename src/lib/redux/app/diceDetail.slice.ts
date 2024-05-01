import { StatusDiceDetail } from '@/constants';
import { createSlice } from '@reduxjs/toolkit';

interface DiceDetailDto {
  gameDeiceId: number;
  status: string;
  totalRed: number;
  transaction: number;
  diceDetailId: number;
}

interface DiceDetailSlice {
  indexChips: number[];
  dataDiceDetail: DiceDetailDto[];
  dataDiceDetailHistory: {
    gameDeiceId: {
      transaction: number;
      totalRed: number;
    }[];
  }[];
}

const DiceDetailSlice = createSlice({
  name: 'diceDetail',
  initialState: {
    indexChips: [4, 5, 6, 7, 8],
    dataDiceDetail: [],
    dataDiceDetailHistory: [],
  } as DiceDetailSlice,
  reducers: {
    setIndexChipsRedux: (state, action) => {
      state.indexChips = action.payload.indexChips;
    },
    updateListDataDiceDetail: (state, action) => {
      state.dataDiceDetail = action.payload.dataDiceDetail;
    },
    updateOrAddDataDiceDetail: (state, action: { payload: DiceDetailDto }) => {
      const checkExit = state.dataDiceDetail.find(
        (d) => d.gameDeiceId === action.payload.gameDeiceId
      );
      if (checkExit) {
        state.dataDiceDetail = state.dataDiceDetail.map((item) => {
          if (item.gameDeiceId == action.payload.gameDeiceId) return { ...item, ...action.payload };
          else return item;
        });
      } else {
        state.dataDiceDetail = [...state.dataDiceDetail, action.payload];
      }
    },
  },
});

export const { setIndexChipsRedux, updateOrAddDataDiceDetail, updateListDataDiceDetail } =
  DiceDetailSlice.actions;

export default DiceDetailSlice.reducer;
