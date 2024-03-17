var cors = require("cors");
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
// import React from "react";
app.use(cors()); // Use this after the variable declaration

const root = document.getElementById("root");

if (!root) {
  throw new Error("root isn't found");
}

const container = createRoot(root);

container.render(<App />);
