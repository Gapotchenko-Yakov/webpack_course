import React, { useState } from "react";

import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import BleachLogo from "@/assets/bleach.svg";
import RenjiPNG from "@/assets/renji.png";
import RenjiJPG from "@/assets/renji.jpg";

function TestNumber(n: number) {
  console.log("number", n);
}

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  TestNumber(355);
  TestNumber(55);

  // if (__PLATFORM__ === "desktop") {
  //   return <div>ISDESKTOPPLATFORM</div>;
  // }

  // if (__PLATFORM__ === "mobile") {
  //   return <div>ISMOBILEPLATFORM</div>;
  // }

  // if (__ENV__) {
  //   //devTools()
  // }

  return (
    <div>
      <h1>PLATFORM={__PLATFORM__}</h1>
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
