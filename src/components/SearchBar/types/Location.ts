export interface LocationProps {
  items: Array<LocationTypes>;
}

export type LocationTypes = {
  city: string;
  country: string;
  id: number | string;
};
