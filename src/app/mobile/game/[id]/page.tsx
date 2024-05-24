'use client';

import { useAppDispatch, useAppSelector } from '@/lib';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TableItemMobile } from '../components/TableItem';
import ChipsList from '@/app/game/components/ChipList/index.';
import Image from 'next/image';
import { dataListChipsStatistics } from '@/constants';
import { setIndexChipsRedux } from '@/lib/redux/app/diceDetail.slice';

function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then((stream) => {
      // window.localStream = stream; // A
      // window.localAudio.srcObject = stream; // B
      // window.localAudio.autoplay = true; // C
    })
    .catch((err) => {
      console.error(`you got an error: ${err}`);
    });
}

export default function DetailLive() {
  const { id: gameDiceId } = useParams();
  const { diceGame } = useAppSelector((state) => state.diceGame);
  const gameDiceById = diceGame.find((i) => i.id == +gameDiceId);
  const router = useRouter();
  const [totalBet, setTotalBet] = useState(0);
  const [openChipList, setOpenChipList] = useState(true);
  const indexChipsRedux = useAppSelector((state) => state.diceDetail.indexChips);
  const [indexChips, setIndexChips] = useState<number[]>(indexChipsRedux);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!gameDiceId) {
      router.replace('/mobile/game');
    }
  }, []);

  return (
    <div>
      <div className="w-full overflow-hidden bg-[#111] relative">
        <iframe
          className="w-full h-[164px] scale-[1.66] mt-9 ml-1"
          src={gameDiceById?.idLive}></iframe>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-black top-[200px]">
        <div className="flex h-[30px] items-center justify-between">
          <div className="flex">
            <span>Cược :</span>
            <span className="ml-1 text-[#ffd100] text-xl">{totalBet}</span>
          </div>
          <div className="flex h-full">
            <button className='w-10 h-full bg-[url(/Areas/Mobile/Images/VN/btn_Traditionl.svg)] bg-[length:auto_65%] bg-no-repeat bg-center relative after:content-[""] after:absolute after:top-2 after:bottom-2 after:w-[1px] after:right-0 after:bg-[#333]'></button>
            <button className='w-10 h-full bg-[url(/Areas/Mobile/Images/VN/icon_verifyLive.png)] bg-[length:auto_65%] bg-no-repeat bg-center relative after:content-[""] after:absolute after:top-2 after:bottom-2 after:w-[1px] after:right-0 after:bg-[#333]'></button>
            <button className='w-10 h-full bg-[url(/Areas/Mobile/Images/VN/btn_gamePrompt.svg)] bg-[length:auto_65%] bg-no-repeat bg-center relative after:content-[""] after:absolute after:top-2 after:bottom-2 after:w-[1px] after:right-0 after:bg-[#333]'></button>
            <button className='w-10 h-full bg-[url(/Areas/Mobile/Images/VN/MT_chip_single_off.png)] bg-[length:auto_65%] bg-no-repeat bg-center relative after:content-[""] after:absolute after:top-2 after:bottom-2 after:w-[1px] after:right-0 after:bg-[#333]'></button>
            <button className='w-10 h-full bg-[url(/Areas/Mobile/Images/VN/btn_webLineGrey.svg)] bg-[length:auto_65%] bg-no-repeat bg-center relative after:content-[""] after:absolute after:top-2 after:bottom-2 after:w-[1px] after:right-0 after:bg-[#333]'></button>
          </div>
        </div>
        <div className="h-[331px] bg-white w-full flex justify-center p-[3px]">
          <div className="flex flex-col bg-[#f3f3f3] flex-wrap w-full h-full border-t-[1px] border-l-[1px] border-[#bcbcbc] rounded-sm">
            <div className="basis-1/3 w-[28%]">
              <TableItemMobile
                curChip={1}
                isHighlight={true}
                onBetSuccess={() => {}}
                positionAnswer={1}
                ratio={'1:14'}
                image="/Areas/Mobile/Images/report/CD/img_roadZero.png"
              />
            </div>
            <div className="basis-1/3 w-[28%]">
              <TableItemMobile
                curChip={1}
                isHighlight={true}
                onBetSuccess={() => {}}
                positionAnswer={1}
                ratio={'1:2.8'}
                image="/Areas/Mobile/Images/report/CD/img_roadOne.png"
              />
            </div>
            <div className="basis-1/3 w-[28%]">
              <TableItemMobile
                curChip={1}
                isHighlight={true}
                onBetSuccess={() => {}}
                positionAnswer={1}
                ratio={'1:14'}
                image="/Areas/Mobile/Images/report/CD/img_roadTwo.png"
              />
            </div>
            <div className="basis-1/2 w-[21%]">
              <TableItemMobile
                curChip={1}
                isHighlight={true}
                onBetSuccess={() => {}}
                positionAnswer={1}
                ratio={'1:14'}
                name="Chẵn"
                textColor="text-[#0055fe]"
              />
            </div>
            <div className="basis-1/2 w-[21%]">
              <TableItemMobile
                curChip={1}
                isHighlight={true}
                onBetSuccess={() => {}}
                positionAnswer={1}
                ratio={'1:14'}
                name="Xỉu"
                textColor="text-[#0055fe]"
              />
            </div>
            <div className="basis-1/2 w-[21%]">
              <TableItemMobile
                curChip={1}
                isHighlight={true}
                onBetSuccess={() => {}}
                positionAnswer={1}
                ratio={'1:14'}
                name="Lẻ"
                textColor="text-[#fe0000]"
              />
            </div>
            <div className="basis-1/2 w-[21%]">
              <TableItemMobile
                curChip={1}
                isHighlight={true}
                onBetSuccess={() => {}}
                positionAnswer={1}
                ratio={'1:14'}
                name="Tài"
                textColor="text-[#fe0000]"
              />
            </div>
            <div className="basis-1/3 w-[28%]">
              <TableItemMobile
                curChip={1}
                isHighlight={true}
                onBetSuccess={() => {}}
                positionAnswer={1}
                ratio={'1:14'}
                image="/Areas/Mobile/Images/report/CD/img_roadFour.png"
              />
            </div>
            <div className="basis-1/3 w-[28%]">
              <TableItemMobile
                curChip={1}
                isHighlight={true}
                onBetSuccess={() => {}}
                positionAnswer={1}
                ratio={'1:14'}
                image="/Areas/Mobile/Images/report/CD/img_roadThree.png"
              />
            </div>
            <div className="basis-1/3 w-[28%]">
              <TableItemMobile
                curChip={1}
                isHighlight={true}
                onBetSuccess={() => {}}
                positionAnswer={1}
                ratio={'1:14'}
                image="/Areas/Mobile/Images/report/CD/img_roadEight.png"
              />
            </div>
          </div>
        </div>

        <div className="bg-white flex items-center relative">
          <div className="flex-1">
            <ChipsList curChip={10} setChips={() => {}} />
          </div>
          <div className="h-full w-auto">
            <Image
              alt="bing"
              src={'/Areas/Mobile/Images/blingChip/icon_blingChip_Set.png'}
              width={57}
              height={57}
            />
            {openChipList ? (
              <div className="absolute left-0 right-0 bottom-full m-auto h-fit z-10 bg-[#141414]">
                <div className="text-center relative m-2 border-b-[1px] border-[#356492]">
                  <span className="text-white flex justify-center mb-1">
                    Cài đặt phỉnh
                    <span className=" bg-[url(/Areas/Mobile/Images/img_chipHint.svg)] block bg-no-repeat w-5 h-5 bg-center ml-2"></span>
                  </span>
                  <span className="text-white w-[40px] text-xl absolute -top-[2px] bottom-0 right-0 ">
                    X
                  </span>
                </div>
                <div className="border-b-[1px] border-[#356492] mx-2">
                  <div className="grid grid-cols-4">
                    {dataListChipsStatistics.map((chip, index) => (
                      <div className="flex justify-center">
                        <Image
                          alt="chip phinh"
                          src={indexChips.includes(index) ? chip.on : chip.off}
                          key={index}
                          width={68}
                          height={68}
                          className="w-[56px] h-[56px] text-center"
                          onClick={() => {
                            if (indexChips.includes(index)) {
                              setIndexChips((pre) => pre.filter((c) => c !== index));
                            } else if (indexChips.length < 8) {
                              setIndexChips((pre) => [...pre, index]);
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="m-2 flex justify-between items-center">
                  <span className=" text-[#ffc800]">Chọn tối đa 8 phỉnh</span>
                  <button
                    onClick={() => {
                      dispatch(setIndexChipsRedux({ indexChips }));
                      setOpenChipList(false);
                    }}
                    className="px-2 py-1 bg-[#3678b7] text-white rounded-sm">
                    Xác nhận
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
