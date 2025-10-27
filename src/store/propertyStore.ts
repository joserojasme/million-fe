import { create } from 'zustand';
import type { Property, PropertyFilters, PropertyState } from '../types/Property';
import { propertyService } from '../api/propertyService';

interface PropertyStore extends PropertyState {
  setProperties: (properties: Property[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilters: (filters: PropertyFilters) => void;
  fetchProperties: (filters?: PropertyFilters) => Promise<void>;
  clearError: () => void;
}

export const usePropertyStore = create<PropertyStore>((set, get) => ({
  properties: [],
  loading: false,
  error: null,
  filters: {},

  setProperties: (properties) => set({ properties }),
  
  setLoading: (loading) => set({ loading }),
  
  setError: (error) => set({ error }),
  
  setFilters: (filters) => set({ filters }),
  
  clearError: () => set({ error: null }),

  fetchProperties: async (filters) => {
    const currentFilters = filters || get().filters;
    
    set({ loading: true, error: null });
    
    try {
      const properties = await propertyService.getProperties(currentFilters);
      set({ properties, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch properties',
        loading: false 
      });
    }
  }
}));
