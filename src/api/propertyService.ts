import axios from 'axios';
import type { Property, PropertyFilters } from '../types/Property';

const API_BASE_URL = 'http://localhost:5099/api';

export const propertyService = {
  async getProperties(filters: PropertyFilters = {}): Promise<Property[]> {
    try {
      const params = new URLSearchParams();
      
      if (filters.name) params.append('name', filters.name);
      if (filters.address) params.append('address', filters.address);
      if (filters.minPrice) params.append('minPrice', filters.minPrice.toString());
      if (filters.maxPrice) params.append('maxPrice', filters.maxPrice.toString());

      const response = await axios.get(`${API_BASE_URL}/Property?${params.toString()}`, {
        headers: {
          'accept': '*/*'
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching properties:', error);
      throw new Error('Failed to fetch properties');
    }
  },

  async getPropertyById(id: string): Promise<Property> {
    try {
      const response = await axios.get(`${API_BASE_URL}/Property/${id}`, {
        headers: {
          'accept': '*/*'
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching property:', error);
      throw new Error('Failed to fetch property');
    }
  }
};
