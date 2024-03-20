import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LazyAbout from "@/pages/about";
import LazyShop from "@/pages/shop";
import About from "./pages/about/about";
import Shop from "./pages/shop/shop";

import { Suspense } from "react";

// import React from "react";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root isn't found");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={"\nLoading"}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={"\nLoading"}>
            <LazyShop />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
