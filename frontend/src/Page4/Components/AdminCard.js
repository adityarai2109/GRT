import React from "react";
import "./AdminCard.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function AdminCard(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="AdminCard"
          style={{
            background: props.isDarkMode
              ? props.bg % 2 === 0
                ? "linear-gradient(315deg, #ef476f 25%, #d16a6e 70%)"
                : null
              : props.bg % 2 === 0
              ? "linear-gradient(45deg,rgba(166, 0, 129, 1) 0%,rgba(106, 0, 204, 1) 100%)"
              : null,
            color: props.isDarkMode
              ? "white"
              : props.bg % 2 === 0
              ? "white"
              : "black",
          }}
        >
          <div className="leftAdminCard">
            <img className="image" src={props.image} alt="Image" />
            <div className="suitData">
              <h4 className="name">{props.name}</h4>
              <h6 className="price">{"₹ " + props.price}</h6>
              {/* <p className="id">ID : {props.id.slice(props.id.length - 10)}</p> */}
              <h6 className="createdAt">
                Created at : {props.createdAt.substr(0, 10)}
              </h6>
            </div>
          </div>
          <div className="rightAdminCard">
            <EditIcon style={{ width: "10vh" }} />
            <DeleteIcon style={{ width: "10vh" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCard;
