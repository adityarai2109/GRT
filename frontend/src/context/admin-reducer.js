
let newState = {};

const adminReducer = (state, action) => {

  switch (action.type) {
    case "ADMIN_SIGN_IN":
      newState = {
        ...state,
        isAdmin: action.payload
      };
      // localStorage.setItem("isAdmin", JSON.stringify(newState.isAdmin));
      console.log(newState)
      return newState;

    case "ADMIN_SIGN_OUT":
      newState = {
        ...state,
        isAdmin: action.payload,
      };
      // localStorage.setItem("isAdmin", JSON.stringify(newState.isAdmin));
      console.log(newState);
      return newState;

    default:
      return state;
  }
};

export default adminReducer;
