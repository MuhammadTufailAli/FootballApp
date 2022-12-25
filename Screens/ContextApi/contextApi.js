import React, {useState, createContext} from 'react';

const CartContext = createContext();

export function CartProvider({children}) {
  const [userdetails, setuserdetails] = useState([]);
  const [user, setuser] = useState('');

  return (
    <CartContext.Provider
      value={{
        userdetails,
        setuserdetails,
        user,
        setuser,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
