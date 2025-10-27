import React from 'react';
import type { PropertyFilters } from '../types/Property';
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Button } from './ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Search, X, Filter } from 'lucide-react';

interface FilterBarProps {
  filters: PropertyFilters;
  onFilterChange: (filters: PropertyFilters) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  hasActiveFilters
}) => {
  const handleInputChange = (field: keyof PropertyFilters, value: string) => {
    const newFilters = { ...filters };
    
    if (field === 'minPrice' || field === 'maxPrice') {
      newFilters[field] = value ? Number(value) : undefined;
    } else {
      newFilters[field] = value || undefined;
    }
    
    onFilterChange(newFilters);
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Filter className="h-5 w-5" />
          Filtros de Búsqueda
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre de la Propiedad</Label>
            <Input
              id="name"
              placeholder="Ej: Apartamento Chapinero"
              value={filters.name || ''}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Dirección</Label>
            <Input
              id="address"
              placeholder="Ej: Carrera 7 #60-12"
              value={filters.address || ''}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="minPrice">Precio Mínimo</Label>
            <Input
              id="minPrice"
              type="number"
              placeholder="0"
              value={filters.minPrice || ''}
              onChange={(e) => handleInputChange('minPrice', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="maxPrice">Precio Máximo</Label>
            <Input
              id="maxPrice"
              type="number"
              placeholder="1000000000"
              value={filters.maxPrice || ''}
              onChange={(e) => handleInputChange('maxPrice', e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button 
            onClick={() => onFilterChange(filters)}
            className="flex items-center gap-2"
          >
            <Search className="h-4 w-4" />
            Buscar
          </Button>
          
          {hasActiveFilters && (
            <Button 
              variant="outline" 
              onClick={onClearFilters}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Limpiar Filtros
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
