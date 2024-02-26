import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Tostify() {
  const handleFavoriteBtn = () => {
    toast.success(`Welcome is my favorite `);
  };

  return (
    <div>
      <button onClick={handleFavoriteBtn}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default Tostify;
