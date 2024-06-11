'use client';
import { useState } from 'react';
import { TableItemBaccarat } from '../TableItemBacarat';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import ChipsList from '@/components/game/ChipList/index.';
import { SelectChipsAndChosesChip } from '../SelectChipsAndChosesChip';

const cx = classNames.bind(styles);

export function ControllerBaccarat(): JSX.Element {
  const [typePlay, setTypePlay] = useState('old');
  const [totalBet, setTotalBet] = useState(0);
  const [curChip, setCurrChip] = useState(0);

  return (
    <div className="">
      <div
        className={cx(
          'bg-[url(/Content/images/vn/json/desktopBJ.png)] absolute left-0 right-0 bottom-[130px] bg-no-repeat z-[1] overflow-hidden ',
          {
            'bg-[49px_0px] bg-[length:94%] h-[22%]': typePlay == 'old',
            'bg-[49px_-181px] bg-[length:94%] h-[22%]': typePlay == 'all',
          }
        )}>
        <div className={cx('live_action')}>
          <div className={cx('absolute left-0 right-0 top-0 bottom-0 [&>div]:h-[34.3%]', 'd3')}>
            <TableItemBaccarat className="basis-[24%]" />
            <TableItemBaccarat className="basis-[26%]" />
            <TableItemBaccarat className="basis-[26%]" />
            <TableItemBaccarat className="basis-[24%]" />
            <TableItemBaccarat className="basis-[24%]" />
            <TableItemBaccarat className="basis-[52%]" />
            <TableItemBaccarat className="basis-[24%]" />
            <TableItemBaccarat isPlayer className="basis-[52%]" />
          </div>
        </div>
      </div>
      <div
        className={cx(
          'absolute left-2 right-2 bottom-[110px] z-[6] flex justify-between items-center'
        )}>
        <div className="flex">
          <button
            onClick={() => setTypePlay('all')}
            className={cx('mr-1 px-4 py-[2px] text-sm rounded-sm', {
              'bg-[#434343] text-[#848484]': typePlay != 'all',
              'bg-[#199600] text-white': typePlay == 'all',
            })}>
            Ăn đủ
          </button>
          <button
            onClick={() => setTypePlay('old')}
            className={cx('mr-1 px-4 py-[2px] text-sm rounded-sm', {
              'bg-[#434343] text-[#848484]': typePlay != 'old',
              'bg-[#199600] text-white': typePlay == 'old',
            })}>
            Cổ điển
          </button>
          <div className="w-6 h-[26px] mr-2 p-[3px] bg-[#ff9c00] rounded-sm">
            <button className="w-full h-full bg-[url(/Content/images/vn/json/default.png)] bg-no-repeat bg-[-28px_-337px] bg-[length:270%]"></button>
          </div>
          <div className="w-6 h-[26px] mr-2 p-[3px] bg-[#434343] rounded-sm">
            <button className="w-full h-full bg-[url(/Content/images/vn/json/default.png)] bg-no-repeat bg-[-28px_-377px] bg-[length:270%]"></button>
          </div>
          <div className="flex">
            <span className="text-[#848484] block mr-1 text-base">Cược :</span>
            <span className="text-[#f9d901] font-semibold">{totalBet}</span>
          </div>
        </div>
        <SelectChipsAndChosesChip curChip={curChip} setCurChip={setCurrChip} />
      </div>
    </div>
  );
}
