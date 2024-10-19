import React from "react";
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropDown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  function handleChange(e) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(filterField, e.target.value);
    setSearchParams(newSearchParams);
  }

  return <Select value={value} onChange={handleChange} options={options} />;
}

export default FilterDropDown;
