import React from 'react';

const Form = () => {
  return (
    <form action="" className="mt-10">
      <div className="flex gap-3 items-center">
        <div className="relative mb-4">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            name="firstName"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>

      <div className="relative mb-4">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <input
          type="string"
          id="number"
          name="number"
          placeholder="Phone Number"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <select
          id="Select service"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          <option value={'budget'} selected>
            Budget
          </option>
          <option value="100">100$</option>
          <option value="200">200$</option>
          <option value="300">300$</option>
        </select>
      </div>
      <div>
        <button className="btn-ptimary flex justify-center w-full">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
