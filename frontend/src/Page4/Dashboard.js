import React from "react";
import "./Dashboard.css";
import AdminCard from "./Components/AdminCard";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Link } from "react-router-dom";

function Dashboard(props) {
  const imgUrl = "http://localhost:5000";
  props.products.map((i) => console.log(i._id));
  console.log(props.products[0]);
  return (
    <>
      <div className="dashboard">
        <div>
          <div className="addContainer">
            <Link to="/addProduct">
              <button className="add">
                Add Product{" "}
                <AddCircleOutlineOutlinedIcon
                  fontSize="small"
                />
              </button>
            </Link>
          </div>
          {props.products.map((i, index) => (
            <div>
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
