import React from 'react';

const Roadmap = () => {
  return (
    <section
      id="howtobuy?"
      className="bg-white hidden md:block relative mb-16 py-16 "
    >
      <h2 className="text-skin-dark py-10 text-[2em] leading-[40px] text-center">
        Roadmap
      </h2>

      <div className="container  flex justify-between px-5 xl:px-[260px]">
        <div className="basis-[40%]  relative flex flex-col justify-between">
          <div className="absolute left-[40%] top-[9%]">
            <h2 className="text-2xl text-skin-dark font-semibold">2023 Q3</h2>
          </div>
          <div className="absolute left-[40%]  top-[45%]">
            <h2 className="text-2xl text-skin-dark font-semibold">2023 Q4</h2>
          </div>
          <div className="absolute left-[40%]  top-[85%]">
            <h2 className="text-2xl text-skin-dark font-semibold">
              2024 Q1-Q2
            </h2>
          </div>
        </div>
        <div className="basis-[20%] flex justify-center">
          <img src="/image/roadmap.png" alt="roadmap.png" />
        </div>
        <div className="basis-[40%] relative">
          <div className="flex  spacer-y-10 flex-col justify-between">
            <div className="absolute top-[1%]">
              <ul className="space-y-2">
                <li className="text-[#836E8C] text-base font-normal">
                  Finished Airdrop
                </li>
                <li className="text-[#836E8C] text-base font-normal">
                  Relaunch on new contract (V2)
                </li>
                <li className="text-[#836E8C] text-base font-normal">
                  Liquidity Locked for 265 Years
                </li>
                <li className="text-[#836E8C] text-base font-normal">
                  New and Improved Tokenomics
                </li>
                <li className="text-[#836E8C] text-base font-normal">
                  Partnership with Able Child Africa
                </li>
              </ul>
            </div>
            <div className="absolute top-[30%]">
              <ul className="space-y-2">
                <li className="text-[#836E8C] text-base font-normal">
                  Placement of up to 500 ASICs in the data center
                </li>
                <li className="text-[#836E8C] text-base font-normal">
                  Development and audit of a contract for the distribution of
                  coins after mining
                </li>
                <li className="text-[#836E8C] text-base font-normal">
                  Carrying out a marketing campaign
                </li>
                <li className="text-[#836E8C] text-base font-normal">
                  Migration without fees to KIMI V2
                </li>
                <li className="text-[#836E8C] text-base font-normal">
                  Placement of mining pools for the KIMI in Spain, Canada
                </li>
              </ul>
            </div>
            <div className="absolute top-[70%]">
              <ul className="space-y-2">
                <li className="text-[#836E8C] text-base font-normal">
                  Development of a mobile game for iOS and Android (A game with
                  a competitive mode, the meaning of which is the opening of a
                  mining farm, the purchase, and improvement of hardware that
                  will bring KIMI tokens)
                </li>
                <li className="text-[#836E8C] text-base font-normal">
                  GUI application for Mining on Windows, Linux
                </li>
                <li className="text-[#836E8C] text-base font-normal">
                  Liquidity Locked for 265 Years
                </li>
                <li className="text-[#836E8C] text-base font-normal">
                  Marketing listing on CEX exchanges
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[10%]">
        <img src="/image/coin.svg" alt="" />
      </div>
      <div className="absolute right-0 bottom-[0%]">
        <img src="/image/coin3.svg" alt="" />
      </div>
    </section>
  );
};

export default Roadmap;
