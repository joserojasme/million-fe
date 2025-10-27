import { useState, useCallback } from 'react';
import type { PropertyFilters } from '../types/Property';

export const useFilters = () => {
  const [filters, setFilters] = useState<PropertyFilters>({});

  const updateFilter = useCallback((key: keyof PropertyFilters, value: string | number | undefined) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  const hasActiveFilters = Object.values(filters).some(value => 
    value !== undefined && value !== '' && value !== null
  );

  return {
    filters,
    updateFilter,
    clearFilters,
    hasActiveFilters,
    setFilters
  };
};
