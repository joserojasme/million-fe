import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FilterBar } from '../FilterBar';
import type { PropertyFilters } from '../../types/Property';

describe('FilterBar', () => {
  const mockFilters: PropertyFilters = {
    name: 'Test Property',
    address: 'Test Address',
    minPrice: 100000000,
    maxPrice: 500000000
  };

  it('renders all filter inputs', () => {
    const mockOnFilterChange = vi.fn();
    const mockOnClearFilters = vi.fn();
    
    render(
      <FilterBar
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
        hasActiveFilters={true}
      />
    );
    
    expect(screen.getByLabelText('Nombre de la Propiedad')).toBeInTheDocument();
    expect(screen.getByLabelText('Dirección')).toBeInTheDocument();
    expect(screen.getByLabelText('Precio Mínimo')).toBeInTheDocument();
    expect(screen.getByLabelText('Precio Máximo')).toBeInTheDocument();
  });

  it('displays current filter values', () => {
    const mockOnFilterChange = vi.fn();
    const mockOnClearFilters = vi.fn();
    
    render(
      <FilterBar
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
        hasActiveFilters={true}
      />
    );
    
    expect(screen.getByDisplayValue('Test Property')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test Address')).toBeInTheDocument();
    expect(screen.getByDisplayValue('100000000')).toBeInTheDocument();
    expect(screen.getByDisplayValue('500000000')).toBeInTheDocument();
  });

  it('calls onFilterChange when input values change', () => {
    const mockOnFilterChange = vi.fn();
    const mockOnClearFilters = vi.fn();
    
    render(
      <FilterBar
        filters={{}}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
        hasActiveFilters={false}
      />
    );
    
    const nameInput = screen.getByLabelText('Nombre de la Propiedad');
    fireEvent.change(nameInput, { target: { value: 'New Property' } });
    
    expect(mockOnFilterChange).toHaveBeenCalledWith({ name: 'New Property' });
  });

  it('shows clear filters button when hasActiveFilters is true', () => {
    const mockOnFilterChange = vi.fn();
    const mockOnClearFilters = vi.fn();
    
    render(
      <FilterBar
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
        hasActiveFilters={true}
      />
    );
    
    expect(screen.getByText('Limpiar Filtros')).toBeInTheDocument();
  });

  it('hides clear filters button when hasActiveFilters is false', () => {
    const mockOnFilterChange = vi.fn();
    const mockOnClearFilters = vi.fn();
    
    render(
      <FilterBar
        filters={{}}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
        hasActiveFilters={false}
      />
    );
    
    expect(screen.queryByText('Limpiar Filtros')).not.toBeInTheDocument();
  });
});
