import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";
import AdminCard from "./Components/AdminCard";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Link } from "react-router-dom";
import { AdminContext } from '../context/AdminState'

function Dashboard(props) {
  const imgUrl = process.env.REACT_APP_API_URL;
  const {signOut} = useContext(AdminContext)
  //console.log(imgUrl);
   let history = useHistory();
 
   const handleSignOut = () => {
          signOut()
        history.push(`/login`);
   }

  return (
    <>
      <div className="dashboard">
        <div>
          <div className="addContainer">
            <button onClick = {handleSignOut} > signOut </button>
            <Link to="/addProduct">
              <button className="add">
                Add Product <AddCircleOutlineOutlinedIcon fontSize="small" />
              </button>
            </Link>
          </div>
          {props.products.length !== 0 ? (
            props.products
              .sort(function (a, b) {
                let d1 = new Date(a.createdAt).getTime();
                let d2 = new Date(b.createdAt).getTime();
                return d2 - d1;
              })
              .map((i, index) => (
                <AdminCard
                  isDarkMode={props.isDarkMode}
                  bg={index}
                  id={i._id}
                  image={`${imgUrl}/upload/${i.image}`}
                  name={i.name}
                  price={i.price}
                  category={i.category}
                  quantity={i.quantity}
                  createdAt={i.createdAt}
                />
              ))
          ) : (
            <Loader isDarkMode={props.isDarkMode} />
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
