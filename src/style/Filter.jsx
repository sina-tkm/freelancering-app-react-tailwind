import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleChange(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <div className='flex items-center gap-x-2 text-xs'>
      <span>وضعیت</span>
      <div className='flex items-center gap-x-2 border-secondary-100 bg-secondary-0 p-1 rounded-lg'>
        {options.map(({ label, value }) => {
          const isActive = value === currentFilter;
          return (
            <button
              onClick={() => handleChange(value)}
            //   disabled={isActive}
              key={value}
              className={`rounded-md px-4 py-1.5  whitespace-nowrap transition-all duration-300 font-bold ${
                isActive
                  ? "!bg-primary-900 text-white"
                  : " bg-secondary-0 text-secondary-800"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
