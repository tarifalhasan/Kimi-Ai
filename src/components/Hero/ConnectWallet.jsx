import React from 'react';

const ConnectWallet = () => {
  return (
    <div className="bg-[#ffff] py-8 rounded-lg feature-card-shadow lg:w-[80%] ">
      <div className="text-center mb-3 ">
        <h4 className="text-lg text-skin-dark font-medium">
          CLAIM UP TO 100% PRESALE BONUS
        </h4>
        <p className="text-base font-normal text-[#836E8C]">
          1 $KIMI = 0.001 USDT
        </p>
      </div>
      {/* date and time */}
      <div className="px-5 space-y-5">
        <div className="grid grid-cols-4 place-items-center">
          <div className="days w-[69px] h-[78px] rounded-[8px] border-2 border-dashed border-[#0F172A] border-opacity-30 flex justify-center items-center flex-col">
            <h2 className="text-2xl text-skin-dark font-semibold">2</h2>
            <p>Days</p>
          </div>
          <div className="hour w-[69px] h-[78px] rounded-[8px] border-2 border-dashed border-[#0F172A] border-opacity-30 flex justify-center items-center flex-col">
            <h2 className="text-2xl text-skin-dark font-semibold">15</h2>
            <p>Hour</p>
          </div>
          <div className="minutes w-[69px] h-[78px] rounded-[8px] border-2 border-dashed border-[#0F172A] border-opacity-30 flex justify-center items-center flex-col">
            <h2 className="text-2xl text-skin-dark font-semibold">45</h2>
            <p>Minutes</p>
          </div>
          <div className="days w-[69px] h-[78px] rounded-[8px] border-2 border-dashed border-[#0F172A] border-opacity-30 flex justify-center items-center flex-col">
            <h2 className="text-2xl text-skin-dark font-semibold">59</h2>
            <p>Second</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-skin-dark text-2xl font-semibold">
            Amount Raised
          </h2>
          <p className="text-xl text-skin-dark font-semibold">$2,124,553.12</p>
        </div>
        <button className="btn-ptimary py-2.5 text-xl w-full flex justify-center">
          <span>Connect wallet</span>
        </button>
        <div className="">
          <div className="flex justify-between items-center">
            <p className="text-skin-dark font-medium">Presale Ends</p>
            <p className="text-skin-dark font-medium"> May 31st</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-skin-dark font-medium">CEX Listings s</p>
            <p className="text-skin-dark font-medium"> May 31st</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-skin-dark font-medium">Listing Price </p>
            <p className="text-skin-dark font-medium"> 1 $KIMI = 0.002 USDT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
