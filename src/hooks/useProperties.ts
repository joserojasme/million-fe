import { useCallback } from 'react';
import { usePropertyStore } from '../store/propertyStore';
import type { PropertyFilters } from '../types/Property';

export const useProperties = () => {
  const { 
    properties, 
    loading, 
    error, 
    filters, 
    fetchProperties, 
    setFilters, 
    clearError 
  } = usePropertyStore();

  const handleSearch = useCallback(async (searchFilters: PropertyFilters) => {
    setFilters(searchFilters);
    await fetchProperties(searchFilters);
  }, [setFilters, fetchProperties]);

  const handleClearFilters = useCallback(async () => {
    const clearedFilters = {};
    setFilters(clearedFilters);
    await fetchProperties(clearedFilters);
  }, [setFilters, fetchProperties]);

  return {
    properties,
    loading,
    error,
    filters,
    handleSearch,
    handleClearFilters,
    clearError,
    refetch: () => fetchProperties(filters)
  };
};
