import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChuckNorrisPage from "./routes/ChuckNorris.Page";
import DadJokePage from "./routes/DadsJoke.Page";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "/",
        element: <ChuckNorrisPage/>,
      },
      {
        path: "/dadJoke",
        element: <DadJokePage/>,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
