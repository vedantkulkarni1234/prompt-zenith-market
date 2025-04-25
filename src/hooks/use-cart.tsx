
import { createContext, useContext, useEffect, useState } from "react";
import { PromptSuite } from "@/types";
import { useToast } from "@/components/ui/use-toast";

interface CartContextType {
  items: PromptSuite[];
  addItem: (item: PromptSuite) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
  cartTotal: number;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<PromptSuite[]>([]);
  const { toast } = useToast();

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('zenithPromptCart');
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart));
      } catch (error) {
        console.error('Failed to parse stored cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('zenithPromptCart', JSON.stringify(items));
  }, [items]);

  const addItem = (item: PromptSuite) => {
    if (!isInCart(item.id)) {
      setItems([...items, item]);
      toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart.`,
      });
    } else {
      toast({
        title: "Already in cart",
        description: `${item.name} is already in your cart.`,
        variant: "destructive",
      });
    }
  };

  const removeItem = (id: string) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const isInCart = (id: string) => {
    return items.some(item => item.id === id);
  };

  const cartTotal = items.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, isInCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
