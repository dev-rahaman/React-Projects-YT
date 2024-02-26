import { BsEmojiSunglasses } from "react-icons/bs";
import { FaImage } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdGifBox } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useRef } from "react";

const Modal = ({ openModal, handleCloseModal }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  if (openModal) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  if (!openModal) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-center ">
        <div
          ref={modalRef}
          className="bg-white w-[500px] mt-20 shadow-lg border rounded-lg"
        >
          <div className="flex items-center justify-end m-2">
            <button
              onClick={handleCloseModal}
              className="text-red-600 text-2xl  "
            >
              <IoMdClose />
            </button>
          </div>
          <div className=" p-6 rounded-lg">
            <h2 className="text-2xl   font-bold mb-4 -mt-10 text-center">
              Create Post
            </h2>
            <div className="flex items-center mb-4">
              <>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxwBGpoFONlCRbZw5zEvhbhNJwxkDHrSV_A&usqp=CAU"
                  alt="User Avatar"
                  className="rounded-full mr-2  w-[40px] h-[40px]"
                />
              </>
              <div>
                <p className="bold">Abdur Rahaman</p>
                <p className="bold">Public</p>
              </div>
            </div>
            <form>
              <div className="mb-4">
                <textarea
                  id="postContent"
                  name="postContent"
                  rows="4"
                  className="w-full h-[200px] p-2 outline-none rounded-md resize-none custom-scrollbar-text-post"
                  autoFocus
                />
              </div>
              <div className="flex justify-between items-center border-t border-gray-500 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl bg-gray-300 text-yellow-500 cursor-pointer btn   p-1 rounded-full me-2">
                    <BsEmojiSunglasses />
                  </span>
                  <span className="text-2xl bg-gray-300 text-[#F36450] cursor-pointer btn  p-1 rounded-full me-2">
                    <FaLocationDot />
                  </span>
                  <span className="text-2xl bg-gray-300 text-[#40C2B0] cursor-pointer btn   p-1 rounded-full me-2">
                    <MdGifBox />
                  </span>
                  <span className="text-2xl bg-gray-300  cursor-pointer btn   p-1 rounded-full me-2">
                    <FaHeartbeat />
                  </span>
                  <span className="text-2xl bg-gray-300 text-red-500 cursor-pointer btn   p-1 rounded-full me-2">
                    <MdLiveTv />
                  </span>
                  <label
                    htmlFor="choiceFile"
                    className="cursor-pointer border text-[#58C472] border-dashed btn w-[30px] h-[30px] rounded flex  items-center justify-center"
                  >
                    <FaImage />
                  </label>
                  <input
                    type="file"
                    id="choiceFile"
                    className="hidden text-white mt-5 border cursor-pointer border-dashed  bg-[#00193b] rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 btn rounded-full font-bold"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
