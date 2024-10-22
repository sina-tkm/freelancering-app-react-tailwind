import React from "react";
import FilterDropDown from "../../../style/ui/FilterDropDown";
import useCategories from "../../../hooks/useCategory";
import Filter from "../../../style/Filter";
const sortOptions = [
  {
    label: "مرتب سازی(جدیدترین)",
    value: "lastet",
  },
  {
    label: "مرتب سازی(قدیمی ترین )",
    value: "earliest",
  },
];
const statusOptions = [
  {
    value: "ALL",
    label: "همه",
  },
  {
    value: "OPEN",
    label: "باز",
  },
  {
    value: "CLOSED",
    label: "بسته",
  },
];
function ProjectHeader() {
  const { categories } = useCategories();
  return (
    <div className='flex items-center justify-between text-secondary-700 mb-8'>
      <h1 className='text-lg font-bold'>لیست پروژه ها </h1>
      <div className='flex gap-2'>
        <Filter filterField='status' options={statusOptions} />
        <FilterDropDown filterField='sort' options={sortOptions} />
        <FilterDropDown
          filterField='category'
          options={[
            {
              value: "ALL",
              label: "دسته بندی(همه)",
            },
            ...categories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
