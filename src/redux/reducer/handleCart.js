const cart = [];

//Selector
export const getBasketTotal = (state) =>
  state?.reduce((amount, item) => item.price + amount, 0);
/* console.log(getBasketTotal(state)) */

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      //Check if product is already exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //increase the quantitty
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    case "EMPTYCART":
      return (state = []);
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;
