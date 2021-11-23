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
  setExpanded:any;
  setIsEdit:any;
  setEditData:any
}
const Card: React.FC<CardType> = ({ data , setUpdateCards ,UpdateCards ,setExpanded , setIsEdit ,setEditData}: CardType) => {


  const handleDelete = (e: any) => {
    DeleteItem(e.target.value).then(res=>{
      console.log(res);
      setUpdateCards(!UpdateCards)
    })
  };

  const handleEdit = () =>{
    setExpanded(true)
    setIsEdit(true)
    setEditData(data)
  }

  const renderSwitchIcon = (param: any) => {
    switch (param) {
      case 1:
        return < FaInstagram/>;
      case 2:
        return <FaTelegramPlane />;
      case 3:
        return <FaTwitter />;
      case 4:
        return <FaFacebookF />;
      case 5:
        return <FaLinkedin />;
      case 6:
        return <FaGlobe />;
      default:
        return <FaTwitter />;
    }
  };
  const renderSwitchSocials = (param: any) => {
    switch (param) {
      case 1:
        return "اینستاگرام";
      case 2:
        return "تلگرام";
      case 3:
        return "توییتر";
      case 4:
        return "فیسبوک";
      case 5:
        return "لینکدین";
      case 6:
        return "وبسایت";
      default:
        return "پیدا نشد";
    }
  };

  return (
    <div className={classes.Card}>
      <div className={classes.CardBody}>
        <div className={classes.RightSide}>
          <div>
            {renderSwitchIcon(data.value.Socials)}
            <h4>{renderSwitchSocials(data.value.Socials)}</h4>
          </div>
          <div>
            <span> آی دی (ID) :</span>
            <div className={classes.cardId}>{data.value.IDs}</div>
          </div>
          <div>
            <span> لینک :</span>
            <div className={classes.cardLink}>{data.value.Links}</div>
          </div>
        </div>
        <div>
          <Button color="warning" className={classes.EditBTN} value={data.id} onClick={handleEdit}>
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
