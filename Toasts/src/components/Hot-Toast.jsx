import React from "react";
import { Toaster, toast } from "react-hot-toast";
const HotToast = () => {
  const notify = () => toast("my toast");

  return (
    <div>
      <Toaster />
      <button onClick={notify}>Toast</button>
    </div>
  );
};

export default HotToast;
