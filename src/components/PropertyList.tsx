import React from 'react';
import type { Property } from '../types/Property';
import { PropertyCard } from './PropertyCard';
import { Card, CardContent } from './ui/Card';
import { Home, AlertCircle } from 'lucide-react';

interface PropertyListProps {
  properties: Property[];
  loading: boolean;
  error: string | null;
  onViewDetails: (property: Property) => void;
}

const PropertySkeleton: React.FC = () => (
  <Card className="overflow-hidden">
    <div className="h-48 bg-muted animate-pulse" />
    <CardContent className="p-6">
      <div className="space-y-3">
        <div className="h-4 bg-muted rounded animate-pulse" />
        <div className="h-3 bg-muted rounded animate-pulse w-3/4" />
        <div className="h-3 bg-muted rounded animate-pulse w-1/2" />
        <div className="h-8 bg-muted rounded animate-pulse" />
      </div>
    </CardContent>
  </Card>
);

export const PropertyList: React.FC<PropertyListProps> = ({
  properties,
  loading,
  error,
  onViewDetails
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <PropertySkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <AlertCircle className="h-12 w-12 text-destructive mb-4" />
          <h3 className="text-lg font-semibold mb-2">Error al cargar propiedades</h3>
          <p className="text-muted-foreground text-center">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (properties.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Home className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No se encontraron propiedades</h3>
          <p className="text-muted-foreground text-center">
            Intenta ajustar los filtros de búsqueda para encontrar más resultados.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};
