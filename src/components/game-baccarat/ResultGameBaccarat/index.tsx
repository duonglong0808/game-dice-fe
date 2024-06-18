'use client';

import { StatusBaccarat, pointPoker } from '@/constants';
import { useAppSelector } from '@/lib';
import classNames from 'classnames/bind';
import Image from 'next/image';

const cx = classNames.bind({});

export function ResultGameBaccarat(): JSX.Element {
  const { dataBaccaratDetailCurrent } = useAppSelector((state) => state.baccaratDetail);
  const { gameBaccaratId } = useAppSelector((state) => state.baccaratGame);
  const dataBaccaratDetailById = dataBaccaratDetailCurrent.find(
    (d) => d.gameBaccaratId == gameBaccaratId
  );
  const dataStatusBaccarat =
    typeof dataBaccaratDetailById?.status == 'string'
      ? dataBaccaratDetailById?.status?.split(':')
      : [dataBaccaratDetailById?.status];
  const statsBaccaratDetail = Number(dataStatusBaccarat[0]);

  if (
    statsBaccaratDetail == StatusBaccarat.showPoker ||
    statsBaccaratDetail == StatusBaccarat.check
  ) {
    const pointPlayer = dataBaccaratDetailById?.pokerPlayer
      ? dataBaccaratDetailById?.pokerPlayer.reduce(
          (pre, player) => (pre += pointPoker[player.split('_')[1].slice(1)]),
          0
        ) % 10
      : 0;

    const pointBanker = dataBaccaratDetailById?.pokerBanker
      ? dataBaccaratDetailById?.pokerBanker.reduce(
          (pre, banker) => (pre += pointPoker[banker.split('_')[1].slice(1)]),
          0
        ) % 10
      : 0;

    return (
      <div className="absolute left-4 right-0 bottom-[calc(130px+23%)]">
        <div className="bg-[#04030b] flex w-[253px] h-[168px]">
          <div
            className={cx('flex-1 py-2 m-1 border-[1px] border-[transparent] rounded-sm', {
              'bg-[#ffd9804d] border-[#fed700]':
                pointPlayer > pointBanker && statsBaccaratDetail == StatusBaccarat.check,
            })}>
            <div className="text-center text-xl mb-1 font-semibold">
              <span className="text-[#0036ff]">Con</span>
              <span className="text-[#ffd800] ml-[6px]">{pointPlayer}</span>
            </div>
            {dataBaccaratDetailById?.pokerPlayer ? (
              <>
                <div className="flex justify-center">
                  {dataBaccaratDetailById?.pokerPlayer[1] ? (
                    <Image
                      alt="pocker"
                      src={`/Content/images/poker/${dataBaccaratDetailById?.pokerPlayer[1]}.png`}
                      width={40}
                      height={60}
                      className="ml-[2px]"
                    />
                  ) : (
                    <></>
                  )}
                  {dataBaccaratDetailById?.pokerPlayer[0] ? (
                    <Image
                      alt="pocker"
                      src={`/Content/images/poker/${dataBaccaratDetailById?.pokerPlayer[0]}.png`}
                      width={40}
                      height={60}
                      className="ml-1"
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className="-mt-1 flex justify-center">
                  {dataBaccaratDetailById?.pokerPlayer[2] ? (
                    <Image
                      alt="pocker"
                      src={`/Content/images/poker/${dataBaccaratDetailById?.pokerPlayer[2]}.png`}
                      width={40}
                      height={60}
                      className="rotate-90"
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="m-auto h-[95%] w-[1px] bg-[#e6e6e647]"></div>
          <div
            className={cx('flex-1 py-2 m-1 border-[1px] border-[transparent] rounded-sm', {
              'bg-[#ffd9804d] border-[#fed700]':
                pointPlayer < pointBanker && statsBaccaratDetail == StatusBaccarat.check,
            })}>
            <div className="text-center text-xl mb-1 font-semibold">
              <span className="text-[#db1002]">Cái</span>
              <span className="text-[#ffd800] ml-[6px]">{pointBanker}</span>
            </div>
            {dataBaccaratDetailById?.pokerBanker ? (
              <>
                <div className="flex justify-center">
                  {dataBaccaratDetailById?.pokerBanker[1] ? (
                    <Image
                      alt="pocker"
                      src={`/Content/images/poker/${dataBaccaratDetailById?.pokerBanker[1]}.png`}
                      width={40}
                      height={60}
                      className="ml-[2px]"
                    />
                  ) : (
                    <></>
                  )}
                  {dataBaccaratDetailById?.pokerBanker[0] ? (
                    <Image
                      alt="pocker"
                      src={`/Content/images/poker/${dataBaccaratDetailById?.pokerBanker[0]}.png`}
                      width={40}
                      height={60}
                      className="ml-1"
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className="-mt-1 flex justify-center">
                  {dataBaccaratDetailById?.pokerBanker[2] ? (
                    <Image
                      alt="pocker"
                      src={`/Content/images/poker/${dataBaccaratDetailById?.pokerBanker[2]}.png`}
                      width={40}
                      height={60}
                      className="rotate-90"
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}
