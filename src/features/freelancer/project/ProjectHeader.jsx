import React from "react";
import FilterDropDown from "../../../style/ui/FilterDropDown";
import useCategories from "../../../hooks/useCategory";
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
function ProjectHeader() {
  const { categories } = useCategories();
  return (
    <div className='flex items-center justify-between text-secondary-700 mb-8'>
      <h1 className='text-lg font-bold'>لیست پروژه ها </h1>
      <div className="flex gap-2">
        <FilterDropDown filterField='sort' options={sortOptions } />
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
