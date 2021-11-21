import classes from "./Main.module.css";
import React from "react";
import { Button } from "@mui/material";
import {FaPlus} from 'react-icons/fa'
import Card from "./Card/Card";

const Main = () => {
  return (
    <div>
      <div>
        <h2>حساب کاربری</h2>
      </div>
      <div className={classes.Way}>
        <span>خانه</span>
        <span>.</span>
        <span>کاربر</span>
        <span>.</span>
        <span className={classes.WayNotActive}>تنظیمات کاربری</span>
      </div>
      <div className={classes.BoxForm}>
        <div className={classes.mainBox}>
          <h5>مسیر های ارتباطی</h5>
          <Button color="warning"> <FaPlus className={classes.PlusIcon}/> افزودن مسیر ارتباطی </Button>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Main;
