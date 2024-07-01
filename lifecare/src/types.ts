export interface ProductType {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    quantity: number;
  }
  
  
  export interface CartItemType extends ProductType {
    quantity: number;
  }