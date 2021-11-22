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

interface FromType {
  setExpanded: any;
}

const Form: React.FC<FromType> = ({ setExpanded }: FromType) => {
  return (
    <div className={classes.Form}>
      <div className={classes.FormBox}>
        <h6>افزودن مسیر ارتباطی</h6>
        <div className={classes.FormItems}>
          <FormControl className={classes.SelectBox}>
            <InputLabel id="demo-simple-select-label">نوع *</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="نوع"
              className={classes.select}
              // onChange={handleChange}
            >
              <MenuItem value={10}>اینستاگرام</MenuItem>
              <MenuItem value={20}>تلگرام</MenuItem>
              <MenuItem value={30}>توییتر</MenuItem>
              <MenuItem value={40}>فیسبوک</MenuItem>
              <MenuItem value={50}>لینکدین</MenuItem>
              <MenuItem value={60}>وبسایت</MenuItem>
            </Select>
          </FormControl>
          <TextField
            className={classes.select}
            id="outlined-basic"
            label="لینک"
            variant="outlined"
          />
          <TextField
            className={classes.select}
            id="outlined-basic"
            label="آی دی (ID)"
            variant="outlined"
          />
          <div className={classes.SubmitBTN}>
            <Button
              variant="outlined"
              className={classes.unSubmit}
              color="inherit"
              onClick={()=>{setExpanded(false)}}
            >
              انصراف
            </Button>

            <Button
              color="warning"
              variant="contained"
              className={classes.addWay}
            >
              ثبت مسیر ارتباطی
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
