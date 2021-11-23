import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import classes from "./Form.module.css";
import { useFormik } from "formik";
import { ADDSocials ,EditSocials} from "../../../services/services";
import { useState } from "react";

interface FromType {
  setExpanded: any;
  setIsEdit:any;
  editData: any;
  isEdit:boolean;
}

interface IFormik {
  Socials: string;
  Links: string;
  IDs: string;
}

const Form: React.FC<FromType> = ({ setExpanded ,setIsEdit ,editData , isEdit}: FromType) => {
  const [UpdateList , setUpdateList] = useState(false)

  const initialValues: IFormik = {
    Socials: isEdit ? editData.value.Socials : "" ,
    Links: isEdit ? editData.value.Links : "",
    IDs: isEdit ? editData.value.IDs : "",
  };
  const onSubmit = (values: any) => {
    if(isEdit){
      EditSocials(editData.id , values).then(res=>{
       if(res.status === 200){
         setExpanded(false)
         setUpdateList(!UpdateList)
       }
      })
    }else{
    ADDSocials(values).then(res=>{
      if(res.status === 201){
        formik.resetForm()
        setUpdateList(!UpdateList)
        setExpanded(false)
      }
    })
  }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <div className={classes.Form}>
      <div className={classes.FormBox}>
        <h6>{isEdit ? "ویرایش مسیر ارتباطی" : "افزودن مسیر ارتباطی"}</h6>
        <div className={classes.FormItems}>
          <form onSubmit={formik.handleSubmit} className={classes.FormItems}>
            <FormControl className={classes.SelectBox}>
              <InputLabel id="demo-simple-select-label">نوع *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="نوع"
                className={classes.select}
                name="Socials"
                value={formik.values.Socials}
                onChange={formik.handleChange}
              >
                <MenuItem value={1}>اینستاگرام</MenuItem>
                <MenuItem value={2}>تلگرام</MenuItem>
                <MenuItem value={3}>توییتر</MenuItem>
                <MenuItem value={4}>فیسبوک</MenuItem>
                <MenuItem value={5}>لینکدین</MenuItem>
                <MenuItem value={6}>وبسایت</MenuItem>
              </Select>
            </FormControl>
            <TextField
              className={classes.select}
              id="outlined-basic"
              label="لینک"
              variant="outlined"
              name="Links"
              value={formik.values.Links}
              onChange={formik.handleChange}
            />
            <TextField
              className={classes.select}
              id="outlined-basic"
              label="آی دی (ID)"
              variant="outlined"
              name="IDs"
              value={formik.values.IDs}
              onChange={formik.handleChange}
            />
            <div className={classes.SubmitBTN}>
              <Button
                variant="outlined"
                className={classes.unSubmit}
                color="inherit"
                onClick={() => {
                  setExpanded(false);
                  setIsEdit(false)
                }}
              >
                انصراف
              </Button>

              <Button
                color="warning"
                variant="contained"
                className={classes.addWay}
                type="submit"
              >
                {isEdit ?" ویرایش مسیر ارتباطی" : "ثبت مسیر ارتباطی"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
