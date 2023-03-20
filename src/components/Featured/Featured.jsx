import React from 'react';
import { FeaturedData } from '../../constant/data';
const Featured = () => {
  return (
    <div className="bg-white py-8 mb-16">
      <div className="container mx-auto px-5">
        <h4 className="text-center text-base text-[#836E8C] features">
          Featured In
        </h4>
        <div className="flex justify-between mt-4  ">
          {FeaturedData.map((data, i) => (
            <div
              key={i}
              className="w-[146px] feture-shadow flex items-center h-[64px] bg-white rounded-[12px]"
            >
              <img src={data} className="mx-auto block" alt="tarif" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
