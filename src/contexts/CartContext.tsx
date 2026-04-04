import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { toast } from "sonner";

export interface CartItem {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  image?: string;
  category: "vr-training" | "agri-training" | "certification";
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("vr-cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("vr-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = useCallback((newItem: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        toast.info("Item already in cart", {
          description: "Quantity updated",
        });
        return prev.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      toast.success("Added to cart!", {
        description: `${newItem.title} has been added to your cart`,
      });
      return [...prev, { ...newItem, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    toast.success("Removed from cart");
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setItems([]);
    toast.success("Cart cleared");
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
