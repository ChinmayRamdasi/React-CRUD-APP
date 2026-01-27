import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Events = ({ onSubmit }) => {
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: ""
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
