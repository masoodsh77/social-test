import classes from "./Main.module.css";
import React from "react";
import { Button, Collapse } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import Card from "./Card/Card";
import Form from "./Form/Form";

const Main = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
          <Button
            className={classes.ADDBtn}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            color="warning"
          >
            {" "}
            <FaPlus className={classes.PlusIcon} /> افزودن مسیر ارتباطی{" "}
          </Button>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Form/>
          </Collapse>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Main;
