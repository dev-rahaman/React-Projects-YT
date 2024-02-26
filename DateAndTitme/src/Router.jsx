import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout";
import App from "./App";
import About from "./pages/about";
import Contact from "./pages/contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;
