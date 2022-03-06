//For Add item to Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const deleteCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
