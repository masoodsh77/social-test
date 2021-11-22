import classes from "./Card.module.css";
import React from "react";
import { Button } from "@mui/material";

interface CardType {
  Icon:any;
  social:string;
  ID:string;
  Link:string;
}

const Card:React.FC<CardType> = ({Icon , social , ID , Link}:CardType) => {
  return (
    <div className={classes.Card}>
      <div className={classes.CardBody}>
        <div className={classes.RightSide}>
          <div>
            {Icon}
            <h4>{social}</h4>
          </div>
          <div>
            <span> آی دی (ID) :</span>
            <div className={classes.cardId}>{ID}</div>
          </div>
          <div>
            <span> لینک :</span>
            <div className={classes.cardLink}>
              {Link}
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
