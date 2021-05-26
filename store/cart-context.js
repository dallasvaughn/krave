import { createContext, useEffect, useState } from 'react';

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  let existingItems = [];

  useEffect(() => {
    const stateFromStorage = window.localStorage.getItem('cart');
    const data = stateFromStorage && JSON.parse(stateFromStorage);
    if (data) {
      setCart(data);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify(cart);
    window.localStorage.setItem('cart', data);
  }, [cart]);

  for (let item of cart) {
    existingItems.push(item.id);
  }

  const addToCart = (product) => {
    if (!existingItems.includes(product.id)) {
      setCart([...cart, product]);
    } else {
      cart.forEach((item) => {
        if (item.id === product.id) {
          item.quantity += product.quantity;
        }
      });
      const data = JSON.stringify(cart);
      window.localStorage.setItem('cart', data);
    }
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item !== product);
    setCart(newCart);
  };

  const context = {
    cart: cart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartContext;
