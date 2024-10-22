export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export const products: Product[] = [
  { id: 1, name: "iPhone 15", price: 999, stock: 50 },
  { id: 2, name: "MacBook Pro", price: 1999, stock: 30 },
];
