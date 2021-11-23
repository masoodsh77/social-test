import classes from "./Card.module.css";
import React from "react";
import { Button } from "@mui/material";
import {
  FaTwitter,
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";
import { DeleteItem } from "../../../services/services";

interface CardType {
  data: any;
  setUpdateCards:any;
  UpdateCards:boolean;
}
const Card: React.FC<CardType> = ({ data , setUpdateCards ,UpdateCards }: CardType) => {

  const handleDelete = (e: any) => {
    DeleteItem(e.target.value).then(res=>{
      console.log(res);
      setUpdateCards(!UpdateCards)
    })
  };

  const renderSwitch = (param: any) => {
    switch (param) {
      case "1":
        return <FaTwitter />;
      case "2":
        return <FaTelegramPlane />;
      case "3":
        return <FaLinkedin />;
      case "4":
        return <FaInstagram />;
      case "5":
        return <FaGlobe />;
      case "6":
        return <FaFacebookF />;
      default:
        return <FaTwitter />;
    }
  };

  return (
    <div className={classes.Card}>
      <div className={classes.CardBody}>
        <div className={classes.RightSide}>
          <div>
            {renderSwitch(data.Icon)}
            <h4>{data.socialName}</h4>
          </div>
          <div>
            <span> آی دی (ID) :</span>
            <div className={classes.cardId}>{data.ID}</div>
          </div>
          <div>
            <span> لینک :</span>
            <div className={classes.cardLink}>{data.Link}</div>
          </div>
        </div>
        <div>
          <Button color="warning" className={classes.EditBTN}>
            ویرایش
          </Button>
          <Button
            color="error"
            value={data.id}
            className={classes.DeleteBTN}
            onClick={handleDelete}
          >
            حذف
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
