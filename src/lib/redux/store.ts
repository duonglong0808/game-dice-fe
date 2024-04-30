import { configureStore } from '@reduxjs/toolkit';
import settingAppReduce from './system/settingSys';
import userCurrentReduce from './app/userCurrent.slice';
import diceGameReduce from './app/diceGame.slice';
export const makeStore = () => {
  return configureStore({
    reducer: {
      settingApp: settingAppReduce,
      userCurrent: userCurrentReduce,
      diceGame: diceGameReduce,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
