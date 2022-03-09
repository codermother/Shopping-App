import handleCart from "./handleCart";
import handleUser from "./handleUser";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  handleCart,
  handleUser,
});

export default rootReducers;
