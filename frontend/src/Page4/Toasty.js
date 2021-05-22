import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Toasty.css";

const properties = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const Toast = (type, message) => {
  if (type === "success") return toast.success(`${message}`, properties);
  if (type === "info") return toast.info(`${message}`, properties);
  if (type === "error") return toast.error(`${message}`, properties);
};

export const Toasty = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{ marginTop: "5rem", fontStyle: "Poppins" }}
    />
  );
};
