import React, { useState } from "react";

import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import BleachLogo from "@/assets/bleach.svg";
import RenjiPNG from "@/assets/renji.png";
import RenjiJPG from "@/assets/renji.jpg";

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <div>
        <img src={RenjiJPG} />
        <img src={RenjiPNG} />
        <br />
        <BleachLogo color="purple" width={100} height={100} />
      </div>
      <Link to="/about">About</Link>
      <br />
      <Link to="/shop">Shop</Link>
      <br />
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        <span>inc</span>
      </button>
      <Outlet />
    </div>
  );
};
