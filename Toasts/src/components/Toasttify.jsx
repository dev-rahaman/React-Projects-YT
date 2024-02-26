import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
  const notify = () => toast("It is easy");

  return (
    <div>
      <ToastContainer position="top-right" />
      <button onClick={notify}>Toast</button>
    </div>
  );
};

export default Toastify;
