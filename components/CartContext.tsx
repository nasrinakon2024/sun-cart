'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);

  // Page লোড হলে আগের কার্ট আইটেমগুলো লোড করবে
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const addToCart = (product: any) => {
    setCart((prev) => {
      const updatedCart = [...prev, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
    alert(`${product.name} added to cart!`);
  };

  // removeFromCart ফাংশনটি এখানে Provider এর ভেতরে থাকতে হবে
 const removeFromCart = (productId: number) => {
    setCart((prev) => {
      const updatedCart = prev.filter((item: any) => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });

  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);