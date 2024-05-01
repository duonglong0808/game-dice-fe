export * from './positions';

export const EventSocket = {
  JoinRoom: 'join-room',
  LeaveRoom: 'leave-room',
  Disconnect: 'disconnect',
  Connection: 'connection',
  Data: 'data',
};

export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';

export const StatusPaymentTranSaction = {
  processing: 0,
  success: 1,
  cancel: 2,
};

export const TypePaymentTranSaction = {
  deposit: 0,
  withdrawMoney: 1,
};

export const TypeGamePoint = {
  main: 0,
  sub: 1,
};

export const typeNotification = {
  System: 'system',
  User: 'individual',
};

export const TypeSort = {
  DESC: 'DESC',
  ASC: 'ASC',
};

export const TypeGameDice = {
  XocDia: '0',
  ChanLe: '1',
  Blockchain: '2',
};

export const StatusDiceDetail = {
  prepare: 0,
  shake: 1,
  bet: 2,
  waitOpen: 3,
  check: 4,
  end: 5,
};

export const TypeAnswerDice = {
  p1: 1,
  p2: 2,
  p3: 3,
  p4: 4,
  p5: 5,
  p6: 6,
  p7: 7,
  p8: 8,
  p9: 9,
  p10: 10,
};

export const StatusHistoryPlayDice = {
  wait: 0,
  success: 1,
};

export const TypeUpdatePointUser = {
  up: 0,
  down: 1,
};

export const TypeEmitMessage = {
  join: 0,
  updateStatusDice: 1,
  updatePoint: 2,
};

export const dataListChipsStatistics: {
  type: string;
  on: string;
  off: string;
  value: number | string;
}[] = [
  {
    type: 'custom',
    on: '/Content/Images/blingChip/icon_chip_selectEdit_off.png',
    off: '/Content/Images/blingChip/icon_chip_selectEdit_off.png',
    value: 0,
  },
  {
    type: 'custom',
    on: '/Content/Images/blingChip/icon_chip_selectEdit.png',
    off: '/Content/Images/blingChip/icon_chip_selectEdit.png',
    value: 0,
  },
  {
    type: 'static',
    off: '/Content/Images/blingChip/vn/icon_chip_selectT2_off.png',
    on: '/Content/Images/blingChip/vn/icon_chip_selectT2.png',
    value: 0,
  },
  {
    type: 'static',
    off: '/Content/Images/blingChip/vn/icon_chip_selectT3_off.png',
    on: '/Content/Images/blingChip/vn/icon_chip_selectT3.png',
    value: 0,
  },
  {
    type: 'static',
    on: '/Content/Images/blingChip/vn/icon_chip_selectS.png',
    off: '/Content/Images/blingChip/vn/icon_chip_selectS_off.png',
    value: 'min',
  },
  {
    type: 'static',
    on: '/Content/Images/blingChip/icon_chip_select10.png',
    off: '/Content/Images/blingChip/icon_chip_select10_off.png',
    value: 10,
  },
  {
    type: 'static',
    on: '/Content/Images/blingChip/icon_chip_select50.png',
    off: '/Content/Images/blingChip/icon_chip_select50_off.png',
    value: 50,
  },
  {
    type: 'static',
    on: '/Content/Images/blingChip/icon_chip_select100.png',
    off: '/Content/Images/blingChip/icon_chip_select100_off.png',
    value: 100,
  },
  {
    type: 'static',
    on: '/Content/Images/blingChip/icon_chip_select200.png',
    off: '/Content/Images/blingChip/icon_chip_select200_off.png',
    value: 200,
  },

  {
    type: 'static',
    on: '/Content/Images/blingChip/icon_chip_select500.png',
    off: '/Content/Images/blingChip/icon_chip_select500_off.png',
    value: 500,
  },
  {
    type: 'static',
    on: '/Content/Images/blingChip/icon_chip_select1k.png',
    off: '/Content/Images/blingChip/icon_chip_select1k_off.png',
    value: 1000,
  },
  {
    type: 'static',
    on: '/Content/Images/blingChip/icon_chip_select5k.png',
    off: '/Content/Images/blingChip/icon_chip_select5k_off.png',
    value: 5000,
  },
  {
    type: 'static',
    on: '/Content/Images/blingChip/icon_chip_select10k.png',
    off: '/Content/Images/blingChip/icon_chip_select10k_off.png',
    value: 10000,
  },
  {
    type: 'static',
    on: '/Content/Images/blingChip/icon_chip_select50k.png',
    off: '/Content/Images/blingChip/icon_chip_select50k_off.png',
    value: 50000,
  },
  {
    type: 'static',
    on: '/Content/Images/blingChip/icon_chip_select100k.png',
    off: '/Content/Images/blingChip/icon_chip_select100k_off.png',
    value: 100000,
  },
  {
    type: 'static',
    on: '/Content/Images/blingChip/vn/icon_chip_selectB.png',
    off: '/Content/Images/blingChip/vn/icon_chip_selectB_off.png',
    value: 'max',
  },
];
