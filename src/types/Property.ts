export interface Owner {
  idOwner: string;
  name: string;
  address: string;
  photo: string;
  birthday: string;
}

export interface PropertyImage {
  idPropertyImage: string;
  idProperty: string;
  file: string;
  enabled: boolean;
}

export interface PropertyTrace {
  idPropertyTrace: string;
  dateSale: string;
  name: string;
  value: number;
  tax: number;
  idProperty: string;
}

export interface Property {
  id: string;
  name: string;
  address: string;
  price: number;
  codeInternal: string;
  year: number;
  ownerId: string;
  owner: Owner;
  propertyImages: PropertyImage[];
  propertyTraces: PropertyTrace[];
}

export interface PropertyFilters {
  name?: string;
  address?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface PropertyState {
  properties: Property[];
  loading: boolean;
  error: string | null;
  filters: PropertyFilters;
}
