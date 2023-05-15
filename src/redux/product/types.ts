export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  weight: number;
  images: Object[];
};

export enum Status {
  LOADING = 'loading',
  SUCCES = 'success',
  ERROR = 'error',
}

export interface ProductSliceState {
  items: Product[];
  status: Status;
}
