import React, {useState, createContext} from 'react';

const CartContext = createContext();

export function CartProvider({children}) {
  const [userdetails, setuserdetails] = useState([]);

  return (
    <CartContext.Provider
      value={{
        userdetails,
        setuserdetails,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
