import classes from "./Card.module.css";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { Button } from "@mui/material";

const Card = () => {
  return (
    <div className={classes.Card}>
      <div className={classes.CardBody}>
        <div className={classes.RightSide}>
          <div>
            <FaTwitter className={classes.CardIcon} />
            <h4>توییتر</h4>
          </div>
          <div>
            <span> آی دی (ID) :</span>
            <div className={classes.cardId}>@masood</div>
          </div>
          <div>
            <span> لینک :</span>
            <div className={classes.cardLink}>
              http://twitter.com/masoodsh73
            </div>
          </div>
        </div>
        <div>
          <Button color="warning" className={classes.EditBTN}>ویرایش</Button>
          <Button color="error" className={classes.DeleteBTN}>حذف</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
