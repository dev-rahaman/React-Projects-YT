import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Here is your toast.");

const HotTost = () => {
  return (
    <div>
      <button onClick={notify}>Toast</button>
      <Toaster />
    </div>
  );
};

export default HotTost;
