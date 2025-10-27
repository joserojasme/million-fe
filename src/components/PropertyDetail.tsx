import React from 'react';
import type { Property } from '../types/Property';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { formatPrice, formatDate } from '../lib/utils';
import { 
  MapPin, 
  User, 
  Building, 
  X,
  Image as ImageIcon,
  TrendingUp
} from 'lucide-react';

interface PropertyDetailProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onClose }) => {
  if (!property) return null;

  const mainImage = property.propertyImages.find(img => img.enabled)?.file || '/placeholder-property.jpg';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
          <div className="space-y-1">
            <CardTitle className="text-2xl">{property.name}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {property.address}
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Main Image */}
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <img
              src={mainImage}
              alt={property.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder-property.jpg';
              }}
            />
          </div>

          {/* Property Images Gallery */}
          {property.propertyImages.length > 1 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                Galería de Imágenes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {property.propertyImages.map((image) => (
                  <div key={image.idPropertyImage} className="relative h-20 w-full overflow-hidden rounded-md">
                    <img
                      src={image.file}
                      alt={`${property.name} - Imagen ${image.idPropertyImage}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Property Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Información Básica
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Precio:</span>
                  <span className="font-semibold text-primary">{formatPrice(property.price)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Año:</span>
                  <span>{property.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Código Interno:</span>
                  <span className="font-mono text-sm">{property.codeInternal}</span>
                </div>
              </CardContent>
            </Card>

            {/* Owner Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Información del Propietario
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={property.owner.photo}
                    alt={property.owner.name}
                    className="h-12 w-12 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder-avatar.jpg';
                    }}
                  />
                  <div>
                    <p className="font-semibold">{property.owner.name}</p>
                    <p className="text-sm text-muted-foreground">{property.owner.address}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fecha de Nacimiento:</span>
                  <span>{formatDate(property.owner.birthday)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Property Traces */}
          {property.propertyTraces.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Historial de Transacciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {property.propertyTraces.map((trace) => (
                    <div key={trace.idPropertyTrace} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-semibold">{trace.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(trace.dateSale)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{formatPrice(trace.value)}</p>
                        <p className="text-sm text-muted-foreground">
                          Impuesto: {formatPrice(trace.tax)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
