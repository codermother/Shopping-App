const user = null;

const handleUser = (state = user, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        state: action.payload,
      };
      break;

    case "SIGNOUT":
      return { state: action.payload };
      break;

    default:
      return state;
      break;
  }
};

export default handleUser;
