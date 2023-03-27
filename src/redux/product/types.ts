export type Product = {
    imageUrl: string;
    title: string;
    description: string;
    weight: string;
    price: number;
    category: number;
    categoriesActive: number;
    id: string;
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