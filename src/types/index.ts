// src/data/types.ts
export interface Destination {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  coordinates: number[];
}

export interface RegionFeature {
  type: string;
  properties: {
    id: number;
    name: string;
    density?: number;
  };
  geometry: {
    type: string;
    coordinates: number[][][];
  };
}
