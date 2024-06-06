import React from "react";
import FiltersComponent from "./components/filters";
import ElixirCard from "./components/elixir-card";
import useDashboard from "./useDashboard";
import Loader from "../../components/loader";

const Dashboard = () => {
  const {
    elixirs,
    filters,
    handleFilterApply,
    handleFilterChange,
    handleResetFilters,
    error,
    loading,
  } = useDashboard();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Elixir Dashboard</h1>
      <FiltersComponent
        filters={filters}
        onFilterChange={handleFilterChange}
        onApplyFilters={handleFilterApply}
        onResetFilters={handleResetFilters}
      />

      {loading ? (
        <Loader />
      ) : error ? (
        <div className="text-red-500 text-center my-4">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {elixirs.map((elixir) => (
            <ElixirCard key={elixir.id} elixir={elixir} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
