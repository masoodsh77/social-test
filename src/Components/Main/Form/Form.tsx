import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes.Form}>
      <div className={classes.FormBox}>
        <h6>افزودن مسیر ارتباطی</h6>
        <FormControl className={classes.SelectBox}>
          <InputLabel id="demo-simple-select-label">نوع *</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="نوع"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Form;
