export type BasketItem = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    count: number;
  };
  
export  interface BasketSliceState {
    totalPrice: number;
    items: BasketItem[];
  }