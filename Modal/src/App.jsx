import React, { useState } from "react";
import Modal from "./components/Modal";
import "./app.css";
const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      {openModal ? null : (
        <>
          <div className="flex items-center justify-center gap-2 mt-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxwBGpoFONlCRbZw5zEvhbhNJwxkDHrSV_A&usqp=CAU"
              alt=""
              className="rounded-full w-[40px] h-[40px]"
            />
            <div
              onClick={handleOpenModal}
              className="cursor-pointer flex items-center justify-center bg-[#4E4F50] rounded-full p-2 w-[400px]"
            >
              <p className="text-white">Post Now</p>
            </div>
          </div>
        </>
      )}
      <Modal openModal={openModal} handleCloseModal={handleCloseModal}></Modal>
    </>
  );
};

export default App;
