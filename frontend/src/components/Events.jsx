import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Events = ({ onSubmit }) => {
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    email:"",
    gender:"Female"
  });

  // ✅ Validation function
  const validate = () => {
    let temp = {};

    if (!formData.name.trim()) {
      temp.name = "This Name field is required.";
    }

    if (!formData.address.trim()) {
      temp.address = "This Address field is required.";
    }

    if(!formData.email.trim() || !formData.email.includes("@")){
      temp.email="Please enter the valid email address"
    }

    setError(temp);
    return Object.keys(temp).length === 0; // ✅ valid if no errors
  };

  // ✅ Handle input change + clear error
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setError((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  // ✅ Submit handler
  const handleSubmit = () => {
    if (!validate()) return;
    onSubmit(formData);
  };

  return (
    <div>
      <h3>Form</h3>

      <TextField
        name="name"
        label="Enter Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        error={Boolean(error.name)}
        placeholder={error.name || "Enter Name"}
        helperText={error.name}
        required
      />

      <br /><br />

      <TextField
        name="address"
        label="Enter Address"
        variant="outlined"
        value={formData.address}
        onChange={handleChange}
        error={Boolean(error.address)}
        placeholder={error.address || "Enter Address"}
        helperText={error.address}
        required
      />
      <br /><br />
        <TextField
        name="email"
        label="Enter Email Id"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
        error={Boolean(error.email)}
        placeholder={error.email || "Enter Email Id"}
        helperText={error.email}
        required
      />

      <br />
      <br/>

    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" style={{fontWeight:"bold"}}>Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Female"
        name="gender"
        onChange={handleChange}
        value={formData.gender}
        style={{display:"inline"}}
      >
        <FormControlLabel value="Female" control={<Radio />} label="Female" />
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

    <br/>
      <Button
        variant="contained"
        style={{ marginTop: 10 }}
        onClick={handleSubmit}
        
      >
        Submit
      </Button>
    </div>
  );
};

export default Events;
