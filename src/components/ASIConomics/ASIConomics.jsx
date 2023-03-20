import React from 'react';

const ASIConomics = () => {
  return (
    <section className="container pt-10 pb-32  px-10 grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h2 className="text-[2em] font-semibold leading-[2.5em] text-skin-dark">
          ASIConomics
        </h2>
        <p className="mb-8 w-full lg:w-[80%] text-[#836E8C] text-base leading-relaxed">
          The KiMi Token ecosystem is built in such a way that, regardless of
          the dynamics of Bitcoin, we can always place new hardware.{' '}
          <br className="hidden lg:block py-10" /> In 2023 Q4, it is planned to
          complete the deployment of 500 ASICs (including WhatsMiner M50S/M53,
          Antminer) in a special dedicated part of the hall of the largest data
          center in Russia from the provider VDSina.
        </p>
      </div>
      <div className="relative">
        {/* Card Center */}

        <div className="absolute top-[40%] right-0">
          <div className="card-shadow max-h-[110px] rounded-xl bg-white p-5 w-[260px]">
            <h4 className="text-[14px] text-skin-dark ">
              <span className="text-[#2476FF] ">14% </span> of all mined coins
              will be used to buy new and maintain existing hardware, incl. cage
              rental.
            </h4>
          </div>
        </div>
        <div className="absolute top-[40%] left-0">
          <div className="card-shadow max-h-[110px] rounded-xl bg-white p-5 w-[260px]">
            <h4 className="text-[14px] text-skin-dark ">
              The <span className="text-[#2476FF] ">3% </span> received fees
              from $KIMI transactions will be used to purchase mining hardware
              every quarter.
            </h4>
          </div>
        </div>
        <div className="absolute -top-[15%] left-[10%]  card-shadow max-h-[110px] rounded-xl bg-white p-5 w-[260px]">
          <h4 className="text-[14px] text-skin-dark ">
            Up to <span className="text-[#2476FF] ">$400,000 </span> will be
            invested by the founders of the project to host the first 100 ASICs
            in 2023 Q3.
          </h4>
        </div>
        <div className="card-shadow absolute left-[33%] -bottom-[33%] max-h-[110px] rounded-xl bg-white p-5 w-[260px]">
          <h4 className="text-[14px] text-skin-dark ">
            <span className="text-[#2476FF] ">40% </span>of the presale will be
            used to purchase mining hardware in 2023 Q4.
          </h4>
        </div>
        <div className="absolute -z-10 top-0 flex justify-center left-0 right-0">
          <img src="/image/roket.png" alt="tarif" />
        </div>
      </div>
    </section>
  );
};

export default ASIConomics;
