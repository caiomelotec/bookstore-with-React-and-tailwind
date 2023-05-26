import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // const addToCart = (product) => {
  //   let updatedCartList = state.cartList.concat(product);

  /* to add */
  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProduct = state.cartList.find(
      (item) => item.id === product.id
    );

    let updatedCartList;

    if (existingProduct) {
      // If the product exists, update its quantity
      updatedCartList = state.cartList.map((item) => {
        if (item.id === product.id) {
          // Increment the quantity of the existing product
          return { ...item, quantity: item.quantity + 1 };
        }
        // Leave other items unchanged
        return item;
      });
    } else {
      // If the product doesn't exist, add it to the cart with quantity 1
      updatedCartList = [...state.cartList, { ...product, quantity: 1 }];
    }

    // Update the total and dispatch the action
    updateTotal(updatedCartList);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  /* remove */
  const removeFromCart = (product) => {
    // Find the index of the existing product in the cartList
    const existingProductIndex = state.cartList.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCartList = [...state.cartList];

      // Decrease the quantity of the product
      updatedCartList[existingProductIndex].quantity -= 1;

      // If the quantity reaches 0, remove the product from the cartList
      if (updatedCartList[existingProductIndex].quantity === 0) {
        updatedCartList.splice(existingProductIndex, 1);
      }

      // Update the total and dispatch the updated cartList
      updateTotal(updatedCartList);

      dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          products: updatedCartList,
        },
      });
    }
  };

  /*UPDATE CART */
  const updateTotal = (products) => {
    // Calculate the total by iterating over the products
    const total = products.reduce(
      (accumulator, product) => accumulator + product.price * product.quantity,
      0
    );

    // Dispatch an action to update the total in the state
    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total,
      },
    });
  };

  /*  REMOVE ALL  */
  const removeAll = (product) => {
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    updateTotal(updatedCartList);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id,
        quantity,
      },
    });
  };

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
    removeAll,
    updateQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
  //return useContext(CartContext);
};
