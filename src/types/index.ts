export interface Destination {
  id: number;
  name: string;
  likes: number;
  distance: string;
  verified: boolean;
  coordinates: { lat: number; lng: number };
}
