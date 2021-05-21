import React, {useContext} from 'react';
import { Route,  useHistory,Redirect } from "react-router-dom";
import {AdminContext} from  '../context/AdminState'



// const PrivateRoute = ({ component: Component, ...rest }) => {

//   const { isAdmin } = useContext(AdminContext);
//    return (
//      <Route
//        {...rest}
//        component = {(props) => {
         
//          if (isAdmin) {
//            return <Component {...props} />;
//          } else {
//            return <Redirect to={`/login`} />;
//          }
//        }}
//      />
//    );
//   }

const PrivateRoute = (props) => {

  const { isAdmin } = useContext(AdminContext);
       if(!isAdmin)
           return <Redirect to={`/login`} />;
      else{
          console.log(props)
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