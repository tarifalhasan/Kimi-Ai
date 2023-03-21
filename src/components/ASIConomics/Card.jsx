import React from 'react';

const Card = ({ tag }) => {
  return (
    <div className="card-shadow absolute left-[33%] -bottom-[33%] max-h-[110px] rounded-xl bg-white p-5 w-[260px]">
      {tag}
    </div>
  );
};

export default Card;
