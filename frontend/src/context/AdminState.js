import React, { useReducer } from "react";
import adminReducer from "./admin-reducer";
import { createContext } from "react";

export const AdminContext = createContext();

   //  const adminData =  false
  //  localStorage.getItem("isAdmin")
 // ? JSON.parse(localStorage.getItem("isAdmin"))
// : [];
  
const AdminState = (props) => {
 
  const intialState = {
     isAdmin: false
  };

  const [state, dispatch] = useReducer(adminReducer, intialState);

  // SignIn admin
  const signIn = () => {
    dispatch({
      type: "ADMIN_SIGN_IN",
      payload: true,
    });
  };

  //  signOut Admin
  const signOut = () => {
    dispatch({
      type: "ADMIN_SIGN_OUT",
      payload: false,
    });
  };

  console.log(state)

  return (
    <AdminContext.Provider
      value={{
        isAdmin: state.isAdmin,
        signIn,
        signOut 
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
