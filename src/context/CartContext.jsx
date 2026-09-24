import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../utils/auth";

const CartContext = createContext();

const categoryEmoji = {
  "South Indian": "🥥",
  "North Indian": "🍛",
  Chinese: "🥢",
  Japanese: "🍣",
  Drinks: "🥤",
  Snacks: "🍟"
};

const normalizeFood = (food) => ({
  ...food,
  emoji: food.emoji || categoryEmoji[food.category] || "🍽️"
});

const getSessionKey = () => {
  const user = getUser();

  return user?.email?.trim().toLowerCase() || "guest";
};

const getStorageKey = (type, sessionKey) => `restaurant${type}-${sessionKey}`;

const getInitialList = (type, sessionKey) => {
  const userKey = getStorageKey(type, sessionKey);
  const savedList = localStorage.getItem(userKey);

  if (savedList) {
    return readStoredList(userKey);
  }

  if (sessionKey !== "guest") {
    const legacyKey = `restaurant${type === "Cart" ? "Cart" : "Orders"}`;
    const legacyList = readStoredList(legacyKey);

    if (legacyList.length > 0) {
      localStorage.setItem(userKey, JSON.stringify(legacyList));
      return legacyList;
    }
  }

  return [];
};

const readStoredList = (key) => {
  const savedList = localStorage.getItem(key);

  if (!savedList) {
    return [];
  }

  try {
    return JSON.parse(savedList);
  } catch {
    localStorage.removeItem(key);
    return [];
  }
};

export function CartProvider({ children }) {

  const [sessionKey, setSessionKey] = useState(getSessionKey);
  const [loadedSessionKey, setLoadedSessionKey] = useState(getSessionKey);
  const [cart, setCart] = useState(() => {
    return getInitialList("Cart", getSessionKey());
  });

  const [orders, setOrders] = useState(() => {
    return getInitialList("Orders", getSessionKey());
  });

  useEffect(() => {
    const updateSession = () => setSessionKey(getSessionKey());

    window.addEventListener("restaurant-auth-change", updateSession);

    return () => {
      window.removeEventListener("restaurant-auth-change", updateSession);
    };
  }, []);

  useEffect(() => {
    setCart(getInitialList("Cart", sessionKey));
    setOrders(getInitialList("Orders", sessionKey));
    setLoadedSessionKey(sessionKey);
  }, [sessionKey]);

  useEffect(() => {
    if (loadedSessionKey === sessionKey) {
      localStorage.setItem(getStorageKey("Cart", sessionKey), JSON.stringify(cart));
    }
  }, [cart, loadedSessionKey, sessionKey]);

  useEffect(() => {
    if (loadedSessionKey === sessionKey) {
      localStorage.setItem(getStorageKey("Orders", sessionKey), JSON.stringify(orders));
    }
  }, [loadedSessionKey, orders, sessionKey]);


  // Add food to cart
  const addToCart = (food) => {
    const normalizedFood = normalizeFood(food);

    setCart((currentCart) => {

      const existingItem = currentCart.find(
        (item) => item.id === normalizedFood.id
      );

      if (existingItem) {

        return currentCart.map((item) =>
          item.id === normalizedFood.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );

      }

      return [
        ...currentCart,
        {
          ...normalizedFood,
          quantity: 1
        }
      ];

    });
  };


  // Increase quantity
  const increaseQuantity = (id) => {

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };


  // Decrease quantity
  const decreaseQuantity = (id) => {

    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };


  // Remove item
  const removeFromCart = (id) => {

    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );

  };


  // Clear cart
  const clearCart = () => {
    setCart([]);
  };


  // Place order
  const placeOrder = () => {

    if (cart.length === 0) {
      return null;
    }

    const subtotal = cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );

    const delivery = 40;

    const newOrder = {
      id: Date.now(),
      items: cart,
      subtotal,
      delivery,
      total: subtotal + delivery,
      status: "Preparing",
      date: new Date().toLocaleString()
    };

    setOrders((currentOrders) => [
      newOrder,
      ...currentOrders
    ]);

    setCart([]);

    return newOrder;
  };


  // Calculate cart count
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );


  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  const delivery = cart.length > 0 ? 40 : 0;

  const total = subtotal + delivery;


  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        placeOrder,
        cartCount,
        subtotal,
        delivery,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  return useContext(CartContext);
}