let newState = {};

const initialState = {
  isAdmin: false,
  token: null,
};

const adminReducer = (state, action) => {
  switch (action.type) {
    case "ADMIN_SIGN_IN":
      newState = {
        ...state,
        isAdmin: true,
        token: action.payload.token,
      };
      localStorage.setItem("isAdmin", JSON.stringify(newState.isAdmin));
      localStorage.setItem("token", newState.token);
      // console.log(newState);
      return newState;

    case "ADMIN_PRODUCT_DELETE_SUCCESS":
      newState = {
        ...state,
        isModified: !state.isModified,
      };
      return newState;

    case "ADMIN_SIGN_OUT":
      localStorage.clear();
      // console.log(newState);
      return initialState;
    default:
      return state;
  }
};

export default adminReducer;
