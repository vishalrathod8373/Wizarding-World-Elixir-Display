import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../../services/axiosConfig";
import { Elixir, Filters } from "./types";

const useDashboard = () => {
  const [elixirs, setElixirs] = useState<Elixir[]>([]);
  const [filters, setFilters] = useState<Filters>({
    name: "",
    difficulty: "",
    ingredient: "",
    inventor: "",
    manufacturer: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchElixirs = useCallback(async (queryParams = {}) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get(`/Elixirs`, {
        params: queryParams,
      });
      setElixirs(response?.data);
    } catch (error) {
      setError("Failed to fetch elixirs. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchElixirs();
  }, [fetchElixirs]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilterApply = () => {
    fetchElixirs(filters);
  };

  const handleResetFilters = () => {
    setFilters({
      name: "",
      difficulty: "",
      ingredient: "",
      inventor: "",
      manufacturer: "",
    });
    fetchElixirs();
  };

  return {
    elixirs,
    filters,
    handleFilterChange,
    handleFilterApply,
    handleResetFilters,
    loading,
    error,
  };
};

export default useDashboard;
