import React from 'react';
import Form from './Form';

const SignUp = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 lg:px-[100px]  mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-[60%] md:w-1/2  rounded-lg overflow-hidden sm:mr-10 flex items-center justify-start relative">
          <div>
            <h2 className="text-xl lg:text-5xl font-body text-skin-dark">
              New to Crypto?
            </h2>
            <p className="text-[#836E8C] lg:w-[80%] font-medium text-lg">
              The Kind Miners team offers to go on an exciting journey of
              cryptocurrency miners
            </p>

            <div className="mt-6">
              <h2 className="text-skin-dark text-lg mb-1 font-medium title-font">
                Do you have any questions?
              </h2>
              <button className="btn-ptimary mt-5 flex justify-center ">
                <span>See Whitepaper</span>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] mb-16 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <div className="px-10 ">
            <h2 className="text-skin-dark text-lg mb-1 font-medium title-font">
              Leave your details so that we can contact you to discuss the
              purchase of $KIMI
            </h2>

            <Form />
          </div>
        </div>
      </div>
      <div className="absolute lefy-0 bottom-[0%]">
        <img src="/image/coin2.svg" alt="" />
      </div>
    </section>
  );
};

export default SignUp;
