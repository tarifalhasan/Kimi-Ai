import React from 'react';
import { TeamData } from '../../constant/data';

const Team = () => {
  return (
    <section className="bg-white mb-16 relative">
      <div className="container px-5 py-8">
        <div className="text-center">
          <h2 className="text-[2em] font-semibold leading-[2.5em] text-skin-dark">
            Our Team
          </h2>
          <p className="text-base font-normal text-[#836E8C]">
            Our team consists of 5 employees, get to know them below
          </p>
        </div>
        <div className="grid grid-cols-1 pt-8 pb-8 md:grid-cols-2 lg:grid-cols-5">
          {TeamData.map((data, i) => (
            <div key={i}>
              <img
                className="block mx-auto"
                src={data.profileImg}
                alt={data.name}
              />
              <div className="text-center mt-2">
                <h2 className="text-skin-dark font-semibold text-lg">
                  {data.name}
                </h2>
                <p className="text-[#836E8C] font-light text-base">
                  {data.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-[10%]">
        <img src="/image/coin.svg" alt="" />
      </div>
    </section>
  );
};

export default Team;
