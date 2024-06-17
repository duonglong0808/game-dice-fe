'use client';

import { useAppSelector } from '@/lib';
import classNames from 'classnames/bind';
import Image from 'next/image';

const cx = classNames.bind({});

export function ResultGameBaccarat(): JSX.Element {
  const { dataBaccaratDetailCurrent, dataBetCurrent } = useAppSelector(
    (state) => state.baccaratDetail
  );
  const { gameBaccaratId } = useAppSelector((state) => state.baccaratGame);
  let dataBaccaratDetailById = dataBaccaratDetailCurrent.find(
    (d) => d.gameBaccaratId == gameBaccaratId
  );
  const dataStatusBaccarat =
    typeof dataBaccaratDetailById?.status == 'string'
      ? dataBaccaratDetailById?.status?.split(':')
      : [dataBaccaratDetailById?.status];
  const statsBaccaratDetail = Number(dataStatusBaccarat[0]);

  return (
    <div className="absolute left-0 right-0 bottom-[calc(130px+34.3%)]">
      <div className="bg-[#04030b] flex">
        <div className="my-1 p-2 pb-0 border-r-[1px]">
          <div className="text-center text-xl flex">
            <span className="text-[#0036ff]">Con</span>
            <span className="text-[#ffd800]"></span>
          </div>
          <div>{/* <Image alt='pocker' src={}/> */}</div>
        </div>
        <div className="my-1"></div>
      </div>
    </div>
  );
}
