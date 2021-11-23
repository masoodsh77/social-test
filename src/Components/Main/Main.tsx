import classes from "./Main.module.css";
import React, { useState } from "react";
import { Button, Collapse } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import Card from "./Card/Card";
import Form from "./Form/Form";
import {GetList} from '../../services/services'
import { useEffect } from "react";

const Main = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [LinkData, setLinkData] = useState<Array<string>>([]);
  const [UpdateCards, setUpdateCards] = useState<boolean>(false);

      useEffect(()=>{
        GetList().then(res=>{
          setLinkData(res)
        });
      },[expanded,UpdateCards])

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
            <Form setExpanded={setExpanded} />
          </Collapse>
          <div className={classes.List}>
            {LinkData ? LinkData.map((items, i) => (
              <Card
              key={i}
              data={items}
              UpdateCards={UpdateCards}
              setUpdateCards={setUpdateCards}
              />
              )):null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
