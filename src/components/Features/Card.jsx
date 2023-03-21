import React from 'react';

const Card = ({ icon, title, subTitle }) => {
  return (
    <div
      className={` w-auto   p-4 bg-white  h-[286px] rounded-xl feature-card-shadow`}
    >
      <img src={`${icon}`} alt="" />
      <div className="mt-5">
        <h2 className="text-xl font-medium text-skin-dark">{title}</h2>
        <article className="text-lg text-[#836E8C]">{subTitle}</article>
      </div>
    </div>
  );
};

export default Card;
