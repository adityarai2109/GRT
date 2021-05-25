import React, { useReducer } from "react";
import adminReducer from "./admin-reducer";
import { createContext } from "react";

export const AdminContext = createContext();

const adminStatus = localStorage.getItem("isAdmin")
  ? JSON.parse(localStorage.getItem("isAdmin"))
  : false;

const intialToken = localStorage.getItem("token");

const AdminState = (props) => {
  const intialState = {
    isAdmin: adminStatus,
    token: intialToken,
    isModified: false,
  };

  const [state, dispatch] = useReducer(adminReducer, intialState);

  // SignIn admin
  const signIn = (token) => {
    dispatch({
      type: "ADMIN_SIGN_IN",
      payload: {
        token,
      },
    });
  };

  //  signOut Admin
  const signOut = () => {
    dispatch({
      type: "ADMIN_SIGN_OUT",
      payload: false,
    });
  };

  const handleModify = () => {
    dispatch({
      type: "ADMIN_PRODUCT_DELETE_SUCCESS",
    });
  };

  // console.log(state);

  return (
    <AdminContext.Provider
      value={{
        isAdmin: state.isAdmin,
        token: state.token,
        isModified: state.isModified,
        handleModify,
        signIn,
        signOut,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
