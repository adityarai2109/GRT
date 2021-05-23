import React, {useContext} from 'react';
import { Route,  useHistory,Redirect } from "react-router-dom";
import {AdminContext} from  '../context/AdminState'

const PrivateRoute = (props) => {

  const { isAdmin } = useContext(AdminContext);
   const token = window.localStorage.getItem("token");
       if(!token)
           return <Redirect to={`/login`} />;
      else{
          // console.log(props)
             return (
               <Route
                 path={props.path}
                 exact={props.exact}
                 render={props.render}
               />
             );
      }
  }
 
export default PrivateRoute;