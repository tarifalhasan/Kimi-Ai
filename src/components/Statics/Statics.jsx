import React from 'react';

const Statics = () => {
  return (
    <section className="relative bg-skin-dark my-20">
      <div className="text-white body-font">
        <div className="container   mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="my-6 border-r-2 border-blue-gray-500 sm:w-1/4 w-1/2 ">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                0.0
              </h2>
              <p className="leading-relaxed">Bitcoins Mined</p>
            </div>
            <div className="my-6 border-r-2 border-blue-gray-500 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                1
              </h2>
              <p className="leading-relaxed">Hosted ASICs</p>
            </div>
            <div className="my-6 border-r-2 border-blue-gray-500 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                100
              </h2>
              <p className="leading-relaxed">ASICs Ordered</p>
            </div>
            <div className="my-6  sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                2,000
              </h2>
              <p className="leading-relaxed">Trees Planted</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0">
        <svg
          width="408"
          height="100"
          viewBox="0 0 548 85"
          fill="none"
          className="h-[105px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M-126 -1.03766C-109.422 11.8734 -94.6959 25.6313 -74.3933 35.0302C-59.8926 41.7431 -44.1925 45.6872 -27.4019 46.0799C3.90325 46.8119 36.117 43.0941 65.2173 33.7376C94.9531 24.1767 126.177 15.8814 152.854 1.38077C177.658 -12.1012 200.834 -28.2404 226.541 -40.5663C269.612 -61.2186 322.146 -64 371.134 -64C397.05 -64 423.055 -63.838 448.963 -63.2495C465.221 -62.8801 481.846 -60.9769 498 -62.5823"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            opacity="0.2"
            d="M-134 31.6814C-115.908 45.7652 -99.8364 60.7728 -77.6793 71.0254C-61.854 78.3481 -44.7196 82.6504 -26.3954 83.0787C7.76942 83.8773 42.9258 79.8218 74.6843 69.6154C107.136 59.1861 141.212 50.1373 170.327 34.3195C197.396 19.6129 222.689 2.00773 250.744 -11.4378C297.75 -33.966 355.083 -37 408.545 -37C436.828 -37 465.21 -36.8232 493.484 -36.1813C511.227 -35.7784 529.371 -33.7023 547 -35.4535"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="absolute top-[24%] right-0">
        <svg
          width="140"
          height="89"
          viewBox="0 0 140 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M168 1C152.167 2.47813 134.972 2.70992 119.544 6.16667C104.448 9.54915 88.5498 15.6856 75.2678 22.1667C50.7915 34.11 38.2557 50.83 26.8826 70.7778C8.11381 103.697 1.31863 137.841 1.0253 173.611C0.831116 197.291 1.74144 220.731 4.2132 244.333C4.96785 251.54 4.59067 259.777 9.88056 266"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            opacity="0.1"
            d="M200 18C183.693 19.5228 165.983 19.7615 150.093 23.3226C134.545 26.8072 118.171 33.1289 104.491 39.8057C79.2823 52.1096 66.3711 69.3344 54.6576 89.8843C35.3268 123.798 28.3282 158.972 28.0261 195.822C27.8261 220.217 28.7636 244.364 31.3094 268.679C32.0866 276.103 31.6982 284.59 37.1464 291"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Statics;
