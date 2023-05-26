export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartList: payload.products,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartList: payload.products,
      };

    case "UPDATE_TOTAL":
      return {
        ...state,
        total: payload.total,
      };

    case "UPDATE_QUANTITY":
      const { id, quantity } = action.payload;

      return {
        ...state,
        cartList: state.cartList.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity,
            };
          }
          return item;
        }),
      };

    case "REMOVE_ALL":
      return {
        ...state,
        cartList: payload.products,
      };

    default:
      throw new Error("no case found in cartReducer");
  }
};
