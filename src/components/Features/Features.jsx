import React from 'react';
import { featuresData } from '../../constant/data';
import Card from './Card';
import icon1 from '../../../public/image/Features/pickaxe.png';
import icon2 from '../../../public/image/Features/world.png';
import icon3 from '../../../public/image/Features/plant.png';
import icon4 from '../../../public/image/Features/centralized.png';
const Features = () => {
  return (
    <section className="relative">
      <div className="flex flex-col lg:flex-row container pb-16 px-10 items-center justify-between">
        <div className="basis-[40%] space-y-2">
          <h2 className="text-xl lg:text-4xl font-body text-skin-dark">
            Our Features
          </h2>
          <p className="text-[#836E8C] lg:w-[80%] font-medium text-lg">
            The KiMi team has developed a completely new model in the crypto
            industry
          </p>
          <button className="btn-ptimary mt-2 flex justify-center ">
            <span> Whitepaper</span>
          </button>
        </div>

        <div className="basis-[55%] relative gap-10  flex flex-col  ">
          <div className="flex flex-col lg:flex-row z-10 gap-5">
            <div className="flex gap-5 flex-row lg:flex-col ">
              <Card
                icon={icon1}
                title="Invest in Mining"
                subTitle="  Each holder of KiMi Token automatically becomes a “miner”,
                    receiving a reward from the mined coins. 85% of all mined
                    coins will be locked in liquidity and distributed among all
                    $KIMI holders."
              />
              <Card
                icon={icon2}
                title="Universal Economic Model"
                subTitle="Regardless of the dynamics of Bitcoin, due to the internal ecosystem and fees charged when making transactions with $KIMI, ASIC purchases are planned quarterly."
              />
            </div>
            <div className="flex mt-0 lg:mt-16 gap-5 flex-row lg:flex-col">
              <Card
                icon={icon3}
                title="Completely Eco Friendly"
                subTitle="We use the latest ASICs that consume less electricity and the savings are directly used for reforestation. Also, cryptocurrency mining is carried out exclusively through the Eco-Friendly PEGA poo"
              />
              <Card
                icon={icon4}
                title="Full Decentralization"
                subTitle="Each holder of KiMi Token, regardless of the local legislation in the field of crypto mining, will receive dividends from the cryptocurrency we have mined."
              />
            </div>
          </div>
          <div className="absolute -z-10 inset-0">
            <img src="/image/icon1" alt="" />
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[80%]">
        <img src="/image/coin2.svg" alt="" />
      </div>
      <div className="absolute right-0 top-[10%]">
        <img src="/image/coin3.svg" alt="" />
      </div>
    </section>
  );
};

export default Features;
