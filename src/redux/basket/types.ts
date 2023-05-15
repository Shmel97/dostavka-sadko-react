export type BasketItem = {
    id: string;
    title: string;
    description: string;
    imageUrl: { image_url: string }[];
    price: number;
    count: number;
  };
  
export  interface BasketSliceState {
    totalPrice: number;
    items: BasketItem[];
  }