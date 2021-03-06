export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBaskte = [...state.basket];

      if (index >= 0) {
        newBaskte.splice(index, 1);
      } else {
        console.warn(
          `Cant Remove Product (id: ${action.id}) as its not basket!`
        );
      }

      return {
        ...state,
        basket: newBaskte,
      };

    case "SER_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
