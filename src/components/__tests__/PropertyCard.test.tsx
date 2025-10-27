import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PropertyCard } from '../PropertyCard';
import type { Property } from '../../types/Property';

const mockProperty: Property = {
  id: '1',
  name: 'Test Property',
  address: 'Test Address 123',
  price: 350000000,
  codeInternal: 'TEST-001',
  year: 2020,
  ownerId: 'owner-1',
  owner: {
    idOwner: 'owner-1',
    name: 'John Doe',
    address: 'Owner Address',
    photo: 'https://example.com/photo.jpg',
    birthday: '1990-01-01T00:00:00Z'
  },
  propertyImages: [
    {
      idPropertyImage: 'img-1',
      idProperty: '1',
      file: 'https://example.com/property.jpg',
      enabled: true
    }
  ],
  propertyTraces: []
};

describe('PropertyCard', () => {
  it('renders property information correctly', () => {
    const mockOnViewDetails = vi.fn();
    
    render(<PropertyCard property={mockProperty} onViewDetails={mockOnViewDetails} />);
    
    expect(screen.getByText('Test Property')).toBeInTheDocument();
    expect(screen.getByText('Test Address 123')).toBeInTheDocument();
    expect(screen.getByText('Año: 2020')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Código: TEST-001')).toBeInTheDocument();
  });

  it('calls onViewDetails when button is clicked', () => {
    const mockOnViewDetails = vi.fn();
    
    render(<PropertyCard property={mockProperty} onViewDetails={mockOnViewDetails} />);
    
    const viewDetailsButton = screen.getByText('Ver Detalles');
    fireEvent.click(viewDetailsButton);
    
    expect(mockOnViewDetails).toHaveBeenCalledWith(mockProperty);
  });

  it('displays formatted price', () => {
    const mockOnViewDetails = vi.fn();
    
    render(<PropertyCard property={mockProperty} onViewDetails={mockOnViewDetails} />);
    
    expect(screen.getByText('$ 350.000.000')).toBeInTheDocument();
  });
});
