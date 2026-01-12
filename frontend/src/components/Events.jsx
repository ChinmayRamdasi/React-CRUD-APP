import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Events = ({ onSubmit }) => {
  //Define the default state 
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: ""
  });

  //Function to handle change in text field
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div>
      <h3>Text Box</h3>
      <TextField
        name="name"
        label="Enter Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
      />
      <br /><br />

      <TextField
        name="address"
        label="Enter Address"
        variant="outlined"
        value={formData.address}
        onChange={handleChange}
      />
      <br />

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
