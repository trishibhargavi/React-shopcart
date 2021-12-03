import { applyMiddleware } from "redux";

export interface Product {
    id: string;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
  }
  
  export async function getProducts(): Promise<Product[]> {
    const results = await fetch("https://fakestoreapi.com/products/");
    const products = results.json();
    return products;
  }
  
  export type CartItems = { [productID: string]: number };
  export type CheckoutResponse = { success: boolean; error?: string };
  
  export async function checkout(items: CartItems): Promise<CheckoutResponse> {
    const modifier = Object.keys(items).length > 0 ? "success" : "error";
    const url = `/checkout-${modifier}.json`;
    await sleep(500);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(items),
    });
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error);
    }
    return data as CheckoutResponse;
  }
  
  // utility function to simulate slowness in an API call
  const sleep = (time: number) =>
    new Promise((res) => setTimeout(res, time));


  