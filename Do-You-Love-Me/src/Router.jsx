import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout";
import App from "./App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

export default Router;
