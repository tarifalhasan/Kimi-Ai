import React from 'react';
import ConnectWallet from './ConnectWallet';

const Hero = () => {
  return (
    <section className="hero-gradient text-gray-600 body-font">
      <div className="container mx-auto flex px-10 py-16 md:flex-row flex-col ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font  sm:text-5xl text-3xl mb-4 font-bold font-Outfit text-gray-900">
            Meet the first Eco- <br className="hidden lg:block" /> Friendly
            token for <br className="hidden lg:block" /> Bitcoin Miners.
          </h1>
          <p className="mb-8 leading-relaxed">
            We provide an opportunity to receive dividends from bitcoin mining
            for each of the investors, regardless of their local legislation and
            the number of investments.
          </p>
          <div className="flex justify-center">
            <button className="btn-ptimary">Whitepaper</button>
            <button className="ml-4 bnt-secondary shadow-md">More Info</button>
          </div>
          <div className="flex gap-x-4 mt-16">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full shadow-md bg-white">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4042 1.94433L20 0.417663V0.0834961H14.4717L10.5317 9.89016L6.04917 0.0834961H0.2525V0.417663L2.11667 2.66183C2.29833 2.82766 2.39333 3.07016 2.36917 3.31433V12.1335C2.42667 12.451 2.32333 12.7777 2.1 13.0085L0 15.5535V15.8835H5.95417V15.5493L3.85417 13.0085C3.62667 12.7768 3.51917 12.456 3.565 12.1335V4.50516L8.79167 15.8877H9.39917L13.8933 4.50516V13.5727C13.8933 13.8118 13.8933 13.861 13.7367 14.0177L12.12 15.5818V15.9168H19.9633V15.5827L18.405 14.0568C18.2683 13.9535 18.1975 13.7802 18.2267 13.6118V2.38933C18.1975 2.22016 18.2675 2.04683 18.4042 1.94433Z"
                    fill="#0F172A"
                  />
                </svg>
              </div>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full shadow-md bg-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3_52)">
                    <path
                      d="M19.5879 5.19897C19.3574 4.34219 18.6819 3.66684 17.8252 3.43612C16.2602 3.00781 9.99981 3.00781 9.99981 3.00781C9.99981 3.00781 3.73961 3.00781 2.17452 3.4198C1.33438 3.65036 0.642392 4.34234 0.411833 5.19897C0 6.7639 0 10.0094 0 10.0094C0 10.0094 0 13.2713 0.411833 14.8199C0.642545 15.6765 1.3179 16.352 2.17467 16.5827C3.75609 17.011 9.99996 17.011 9.99996 17.011C9.99996 17.011 16.2602 17.011 17.8252 16.5991C18.682 16.3685 19.3574 15.693 19.5881 14.8364C19.9999 13.2713 19.9999 10.0259 19.9999 10.0259C19.9999 10.0259 20.0164 6.7639 19.5879 5.19897Z"
                      fill="#FF0000"
                    />
                    <path
                      d="M8.00659 13.0079L13.2124 10.0096L8.00659 7.01123V13.0079Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_52">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full shadow-md bg-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3_55)">
                    <path
                      d="M7.84741 12.651L7.51657 17.3043C7.98991 17.3043 8.19491 17.101 8.44074 16.8568L10.6599 14.736L15.2582 18.1035C16.1016 18.5735 16.6957 18.326 16.9232 17.3277L19.9416 3.18434L19.9424 3.18351C20.2099 1.93684 19.4916 1.44934 18.6699 1.75518L0.928238 8.54767C-0.282596 9.01767 -0.264263 9.69267 0.722404 9.99851L5.25824 11.4093L15.7941 4.81684C16.2899 4.48851 16.7407 4.67018 16.3699 4.99851L7.84741 12.651Z"
                      fill="#039BE5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_55">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full shadow-md bg-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3_57)">
                    <path
                      d="M20 3.79875C19.2562 4.125 18.4637 4.34125 17.6375 4.44625C18.4875 3.93875 19.1363 3.14125 19.4413 2.18C18.6488 2.6525 17.7737 2.98625 16.8412 3.1725C16.0887 2.37125 15.0162 1.875 13.8462 1.875C11.5762 1.875 9.74875 3.7175 9.74875 5.97625C9.74875 6.30125 9.77625 6.61375 9.84375 6.91125C6.435 6.745 3.41875 5.11125 1.3925 2.6225C1.03875 3.23625 0.83125 3.93875 0.83125 4.695C0.83125 6.115 1.5625 7.37375 2.6525 8.1025C1.99375 8.09 1.3475 7.89875 0.8 7.5975C0.8 7.61 0.8 7.62625 0.8 7.6425C0.8 9.635 2.22125 11.29 4.085 11.6712C3.75125 11.7625 3.3875 11.8062 3.01 11.8062C2.7475 11.8062 2.4825 11.7912 2.23375 11.7362C2.765 13.36 4.2725 14.5537 6.065 14.5925C4.67 15.6837 2.89875 16.3412 0.98125 16.3412C0.645 16.3412 0.3225 16.3262 0 16.285C1.81625 17.4562 3.96875 18.125 6.29 18.125C13.835 18.125 17.96 11.875 17.96 6.4575C17.96 6.27625 17.9537 6.10125 17.945 5.9275C18.7587 5.35 19.4425 4.62875 20 3.79875Z"
                      fill="#03A9F4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_57">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg  relative lg:w-full md:w-1/2 w-5/6">
          <div className="z-10">
            <ConnectWallet />
          </div>
          <div className="absolute -z-10 -top-[15%] -left-[28%]">
            <img src="/image/hero_bticoin.png" alt="" />
          </div>
          <div className="absolute -z-10 -top-[15%] -left-[28%]">
            <img src="/image/hero_gradient.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
