export type CategorySelect = {
  id: number;
  title: string;
  slug: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCES = 'success',
  ERROR = 'error',
}

export interface CategorySliceState {
  items: CategorySelect[];
  categoryActive: string;
  status: Status;
}
