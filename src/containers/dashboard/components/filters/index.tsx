import Input from "../../../../components/input";
import { FilterKey, Filters } from "../../types";

type FilterProps = {
  filters: Filters;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
};

const FiltersComponent: React.FC<FilterProps> = ({
  filters,
  onApplyFilters,
  onFilterChange,
  onResetFilters,
}) => {
  return (
    <div className="mb-4 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {(Object.keys(filters) as FilterKey[]).map((item) => (
          <Input
            key={item}
            type="text"
            name={item}
            id={item}
            value={filters[item]}
            onChange={onFilterChange}
            placeholder={item.charAt(0).toUpperCase() + item.slice(1)}
            className="p-2 border border-gray-300 rounded"
          />
        ))}
      </div>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={onApplyFilters}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Apply Filters
        </button>
        <button
          onClick={onResetFilters}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FiltersComponent;
