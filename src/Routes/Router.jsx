import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layouts/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true,
            element: <Home/>
        }
    ]
  },
]);
