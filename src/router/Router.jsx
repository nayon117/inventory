import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import SignInPage from "../pages/sign-in";
import SignUpPage from "../pages/sign-up";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path:'sign-in',
    element:<SignInPage/>
  },
  {
    path:'sign-up',
    element:<SignUpPage/>
  }
 
]);

export default router;
