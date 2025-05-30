import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Thank } from "./components";
import MainPage from "./MainPage";

// 👇 Correct placement of `future` flag
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/thank",
      element: <Thank />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
