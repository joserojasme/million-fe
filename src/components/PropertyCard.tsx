import React from 'react';
import type { Property } from '../types/Property';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { formatPrice } from '../lib/utils';
import { MapPin, Calendar, User, Eye } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  const mainImage = property.propertyImages.find((img: any) => img.enabled)?.file || '/placeholder-property.jpg';
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={mainImage}
          alt={property.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-property.jpg';
          }}
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md">
          <span className="text-sm font-semibold text-primary">
            {formatPrice(property.price)}
          </span>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg line-clamp-2">{property.name}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="line-clamp-1">{property.address}</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Año: {property.year}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span className="line-clamp-1">{property.owner.name}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Código: {property.codeInternal}
          </div>
        </div>
        
        <Button 
          onClick={() => onViewDetails(property)}
          className="w-full"
          size="sm"
        >
          <Eye className="h-4 w-4 mr-2" />
          Ver Detalles
        </Button>
      </CardContent>
    </Card>
  );
};
