"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Product } from "@/data/products";

export type CartItem = Product & {
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const CART_STORAGE_KEY = "narostack-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);

      if (savedCart) {
        const parsedItems = JSON.parse(savedCart) as CartItem[];

        // Only keep one product in cart and force quantity to 1
        if (Array.isArray(parsedItems) && parsedItems.length > 0) {
          setItems([{ ...parsedItems[0], quantity: 1 }]);
        }
      }
    } catch {
      setItems([]);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, loaded]);

  const addToCart = (product: Product) => {
    // One product only. New product replaces old product.
    setItems([{ ...product, quantity: 1 }]);
  };

  const removeFromCart = (slug: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.slug !== slug)
    );
  };

  const updateQuantity = (_slug: string, _quantity: number) => {
    // Quantity is always 1 for digital products
    setItems((currentItems) =>
      currentItems.map((item) => ({
        ...item,
        quantity: 1,
      }))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.length > 0 ? 1 : 0;

  const subtotal = useMemo(() => {
    return items.reduce((total, item) => total + item.price, 0);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        subtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}