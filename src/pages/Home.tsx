import React, { useState, useEffect } from 'react';
import type { Property } from '../types/Property';
import { PropertyList } from '../components/PropertyList';
import { FilterBar } from '../components/FilterBar';
import { PropertyDetail } from '../components/PropertyDetail';
import { useProperties } from '../hooks/useProperties';
import { useFilters } from '../hooks/useFilters';
import { Home, Search } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const { properties, loading, error, handleSearch } = useProperties();
  const { filters, clearFilters, hasActiveFilters, setFilters } = useFilters();

  // Cargar propiedades iniciales
  useEffect(() => {
    handleSearch({});
  }, []);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    handleSearch(newFilters);
  };

  const handleClearFilters = () => {
    clearFilters();
    handleSearch({});
  };

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleCloseDetails = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Home className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Million Properties</h1>
              <p className="text-muted-foreground">
                Encuentra la propiedad perfecta para ti
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Filters */}
          <FilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            hasActiveFilters={hasActiveFilters}
          />

          {/* Results Summary */}
          {!loading && !error && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Search className="h-4 w-4" />
                <span>
                  {properties.length} {properties.length === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}
                </span>
              </div>
            </div>
          )}

          {/* Property List */}
          <PropertyList
            properties={properties}
            loading={loading}
            error={error}
            onViewDetails={handleViewDetails}
          />
        </div>
      </main>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <PropertyDetail
          property={selectedProperty}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};
