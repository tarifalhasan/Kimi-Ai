import React from 'react';

const Statics = () => {
  return (
    <div className=" bg-skin-dark mb-16">
      <section className="text-white body-font">
        <div className="container   mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                0.0
              </h2>
              <p className="leading-relaxed">Bitcoins Mined</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                1
              </h2>
              <p className="leading-relaxed">Hosted ASICs</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                100
              </h2>
              <p className="leading-relaxed">ASICs Ordered</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                2,000
              </h2>
              <p className="leading-relaxed">Trees Planted</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statics;
