import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

// import { useEffect } from "react";

// const useTitle = (title) => {
//   useEffect(() => {
//     document.title = `App  |  ${title}`;
//   }, [title]);
// };

// export default useTitle;
