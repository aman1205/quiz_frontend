"use client";

import { DataTableFilterBox } from "@/components/ui/table/data-table-filter-box";
import { DataTableResetFilter } from "@/components/ui/table/data-table-reset-filter";
import { DataTableSearch } from "@/components/ui/table/data-table-search";
import {
  useProductTableFilters,
} from "./use-question-table-filters";
import { columns } from "./columns";
import { DataTable as QuestionTable } from "@/components/ui/table/data-table";
import { Questions } from "@/constants/data";
import { getAllCategory } from "@/lib/queries/Questions/read-category-list";

export default function QuestionsTableAction({
  data,
  totalData
}: {
  data: Questions[];
  totalData: number;
}) {
  const {
    categoriesFilter,
    setCategoriesFilter,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setPage,
    setSearchQuery,
  } = useProductTableFilters();
  const {data:CATEGORY_OPTIONS , isLoading} =getAllCategory();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="name"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <DataTableFilterBox
          filterKey="categories"
          title="Categories"
          options={CATEGORY_OPTIONS? CATEGORY_OPTIONS.data :[] }
          setFilterValue={setCategoriesFilter}
          filterValue={categoriesFilter}
        />
        <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        />
      </div>
      <QuestionTable
        columns={columns}
        data={data}
        totalItems={totalData}
      />
    </div>
  );
}
