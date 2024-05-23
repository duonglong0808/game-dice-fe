'use client';

import { TransferFlash } from '@/components/TranferFlash';
import { useAppSelector } from '@/lib';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { SideBarHomeGame } from '../SideBar';

function formatNumber(number: number): string {
  number = +number.toFixed(1);
  const numberString = number.toString();

  // Tách phần nguyên và phần thập phân (nếu có)
  const [integerPart, decimalPart] = numberString.split('.');

  // Thêm dấu chấm sau mỗi ba chữ số trong phần nguyên
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Nếu có phần thập phân, kết hợp phần nguyên và phần thập phân với dấu phẩy
  if (decimalPart) {
    return `${formattedInteger},${decimalPart}`;
  } else {
    return formattedInteger;
  }
}

export function HeaderGameMobile({
  bg,
  title,
  isShowSlide = true,
}: {
  bg?: string;
  title?: string;
  isShowSlide: boolean;
}): JSX.Element {
  console.log('🚀 ~ HeaderGameMobile ~ bg:', bg);
  const { mainPoint, gamePoint } = useAppSelector((state) => state.userCurrent);
  const [openTransferPoint, setOpenTransferPoint] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <header className="sticky top-0">
      {openTransferPoint ? <TransferFlash closePopup={() => setOpenTransferPoint(false)} /> : <></>}
      <SideBarHomeGame openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <div
        className={classNames('border-b-[1px] flex h-[35px] border-[#666]', {
          'bg-black': !bg,
          bg: bg,
        })}>
        <Link
          href={''}
          className="w-[40px] bg-[url(/Content/images/btn_returnPage.svg)] bg-no-repeat bg-center bg-[length:auto_60%] opacity-[0.8]"></Link>
        {title ? <h2>{title}</h2> : <></>}
        <div className="flex flex-1 justify-end items-center">
          <div
            onClick={() => setOpenTransferPoint(true)}
            className="text-[#ffd100] flex items-center">
            <span className="text-[14px]">$</span>
            <span className="text-xl ml-1">{gamePoint}</span>
            <span className="border-t-[5px] border-r-[5px] border-l-[5px] border-t-[#ffd100] border-l-[transparent] border-r-[transparent] mx-[3px]"></span>
          </div>
          <button className="w-8 h-full ml-1 bg-[url(/Content/images/btn_pieChart.svg)] bg-no-repeat  bg-[length:auto_60%] opacity-[0.8] relative bg-center"></button>
          <button className="w-8 h-full ml-1 bg-[url(/Content/images/btn_betRecord.svg)] bg-no-repeat  bg-[length:auto_60%] opacity-[0.8] relative bg-center"></button>
          <button
            onClick={() => setOpenSideBar(true)}
            className="w-8 h-full ml-1 bg-[url(/Content/images/btn_menu_mobile.svg)] bg-no-repeat  bg-[length:auto_60%] opacity-[0.8] relative bg-center"></button>
        </div>
      </div>
      <div className="flex border-b-[1px] h-[49px] border-[#333] bg-black">
        <div className="w-[45px] mx-[10px]  bg-[url(/Areas/Mobile/Images/logo_KU.svg)] bg-no-repeat bg-center bg-[length:100%_auto] h-full"></div>
        <div className="relative flex flex-1 justify-around mx-2 items-center">
          <div className="mx-1 w-[36%] text-center h-[38px] relative">
            <div className="bg-[url(/Areas/Mobile/Images/VN/img_bac_jackpot.png)] bg-no-repeat bg-[center_bottom] bg-[length:100%] h-[18px] mb-[3px]"></div>
            <span className="block text-sm font-semibold text-[#f1bf74]">
              {formatNumber(1254375.6)}
            </span>
          </div>
          <div className="m-1 bg-[url(/Areas/Mobile/Images/img_jackpotCrown.png)] bg-no-repeat bg-center h-full w-11 bg-contain"></div>
          <div className="mx-1 w-[36%] text-center h-[38px] relative">
            <div className="bg-[url(/Areas/Mobile/Images/VN/img_cd_jackpot.png)] bg-no-repeat bg-[center_bottom] bg-[length:100%] h-[18px] mb-[3px]"></div>
            <span className="block text-sm font-semibold text-[#f1bf74]">
              {formatNumber(1254375.6)}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
