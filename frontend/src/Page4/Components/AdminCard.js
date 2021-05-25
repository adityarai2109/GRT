import React, { useContext } from "react";
import "./AdminCard.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import { Toast, Toasty } from "../Toasty";
import axios from "../../axios";
import { useHistory } from "react-router-dom";
import { AdminContext } from "../../context/AdminState";

function AdminCard(props) {
  const { signOut, token, handleModify } = useContext(AdminContext);

  const [open, setOpen] = React.useState(false);

  let history = useHistory();
  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[10],
      fontSize: 14,
      fontFamily: "Poppins",
    },
  }))(Tooltip);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteItem = async () => {
    //delete item code

    const config = {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    };

    try {
      const res = await axios.delete(`/delete/${props.id}`, config);
      if (res.status === 200) {
        // history.push("/dashboard");
        //Toast("success", "product deleted !!");
        handleModify();
        console.log("deleted");
      }
    } catch (error) {
      setTimeout(() => {
        //  history.push("/login");
        signOut();
      }, 2500);

      window.scrollTo(0, 0);

      error.response
        ? Toast("error", `${error.response.data.message}`)
        : Toast("error", "server timeout");
    }
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
            <img className="image" src={props.image} alt="" />
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
              <LightTooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Edit Item"
              >
                <EditIcon style={{ width: "10vh" }} />
              </LightTooltip>
            </Link>
            <div>
              <LightTooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Delete Item"
              >
                <DeleteIcon
                  style={{ width: "10vh", cursor: "pointer" }}
                  onClick={handleClickOpen}
                />
              </LightTooltip>
            </div>

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
      {Toasty()}
    </>
  );
}

export default AdminCard;
