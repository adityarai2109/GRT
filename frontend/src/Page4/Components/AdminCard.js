import React from "react";
import "./AdminCard.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";

function AdminCard(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteItem = () => {
    //delete item code
    console.log("delete :", props.name);
  };
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
              <h6 className="createdAt">
                Created at : {props.createdAt.substr(0, 10)}
              </h6>
            </div>
          </div>
          <div className="rightAdminCard">
            <Link to={`/editProduct/${props.id}`}>
              <EditIcon style={{ width: "10vh" }} />
            </Link>
            <DeleteIcon style={{ width: "10vh" }} onClick={handleClickOpen} />
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Delete product"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to delete this product?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  style={{ outline: "none" }}
                  onClick={() => {
                    handleClose();
                    deleteItem();
                  }}
                  color="secondary"
                >
                  YES
                </Button>
                <Button
                  style={{ outline: "none" }}
                  onClick={handleClose}
                  color="secondary"
                >
                  NO
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCard;
