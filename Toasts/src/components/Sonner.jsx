import React from "react";
import { Toaster, toast } from "sonner";

const Sonner = () => {
  return (
    <div>
      <Toaster richColors />
      <button onClick={() => toast.success("my toast")}>Toast</button>
    </div>
  );
};

export default Sonner;
