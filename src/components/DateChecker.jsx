import React from "react";

const DateCheckerItem = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[16px] font-bold w-full text-nowrap">{title}</h1>
      <p className="text-[14px] w-full font-light text-nowrap text-neutral-500">
        {subtitle}
      </p>
    </div>
  );
};

const DateChecker = () => {
  return (
    <div className="bg-neutral-300/40 py-10 px-10 rounded-md z-20 absolute bottom-52 left-1/2 -translate-x-1/2">
      <div className="bg-white opacity-100 py-7 px-10 flex gap-20 rounded-md">
        <DateCheckerItem
          title="Where do you want to go?"
          subtitle="Country, ZIP, Postal code, City..."
        />
        <DateCheckerItem title="Check In" subtitle="Chose date" />
        <DateCheckerItem title="Check Out" subtitle="Chose date" />
        <DateCheckerItem title="Guest" subtitle="Number of guests" />
        <button className="uppercase font-bold text-nowrap flex items-center gap-5 bg-primary text-white rounded-md py-2 px-5">
          Check Availability
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DateChecker;
