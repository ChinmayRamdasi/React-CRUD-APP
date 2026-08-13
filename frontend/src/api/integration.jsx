import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";



export const fetchUsers = createAsyncThunk(
  "users/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:5000/users/getUser");

    if(!res.ok) return rejectWithValue("Failed to fetch users")
    const data = await res.json();

   return data
    // setRowData(
    //   data.data.map((u) => ({
    //     id: u.id,
    //     name: u.name,
    //     address: u.address,
    //     email:u.email,
    //     gender:u.gender
    //   }))
    // );
  } catch (e) {
    console.error("Fetch failed", e);
    return rejectWithValue("Failed to fetch users");
  }
});

// 🔹 POST
export const postUsers = async ({ name, address,email,gender }, setLoading, fetchUsersCallback) => {
  try {
    setLoading(true)
    if(!name || !address || !email || !gender || !email.includes("@")){
      toast.error("Please provide valid inputs")
      setLoading(false)
      return;
    }
    else{
    await fetch("http://localhost:5000/users/createUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, address, email, gender})
    });
    toast.success("User Created Successfully!");
    await fetchUsersCallback();
  }
  } catch (e) {
    console.error("Create failed", e);
  } finally {
    setLoading(false);
  }
};

// 🔹 UPDATE (ONLY CHANGED FIELDS)
// export const updateUsers = async ({ id, name, address,email,gender }) => {
//   try{
//     await fetch("http://localhost:5000/users/updateUser", {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ id, name, address, email, gender })
//       });
//       toast.success("User updated successfully");
//   }
//   catch{
//     toast.error("Failed to update user");
//   }
  
// };

// Async thunk wrapper for Redux usage (returns updated user payload)
//Redux Actions.
export const updateUsersThunk = createAsyncThunk(
  "users/updateUser",
  async ({ id, name, address, email, gender }, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:5000/users/updateUser", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name, address, email, gender })
      });

      if (!res.ok) return rejectWithValue('Failed to update user');
      const data = await res.json();
      toast.success("User updated successfully");
      return data;
    } catch (e) {
      toast.error("Failed to update user");
      return rejectWithValue('Failed to update user');
    }
  }
);

// 🔹 DELETE
export const handleDelete = async (id, fetchUsersCallback) => {
  try {
    await fetch("http://localhost:5000/users/deleteUser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    });

    toast.warning("User Deleted from list")
    fetchUsersCallback();
  } catch (e) {
    console.log(e);
  }
};

// 🔹 AG GRID EDIT HANDLER
export const onCellValueChanged = async (params, setRowData, updateUsersCallback) => {
  // copy the AG Grid row data to avoid mutating a potentially frozen object
  const updatedrows = { ...params.data };
  
  // optimistic UI update (use a shallow copy)
  setRowData((prev) =>
    prev.map((row) =>
      row.id === updatedrows.id ? { ...updatedrows } : row
    )
  );

  try {
    await updateUsersCallback({ ...updatedrows });
    toast.success("User updated successfully");
  } catch (e) {
    console.error("Update failed", e);
    toast.error("Failed to update user");
    // rollback safely
    params.node.setData({ ...params.oldData });
  }
};



export const downloadExcel= async()=>{
  try{
    const res=await fetch("http://localhost:5000/users/getUser")

    const data=await res.json()

    const exportData=data.data.map((e)=>{
      return{
        Name:e.name,
        Address:e.address,
        Email:e.email,
        Gender:e.gender
      }
    })
    const worksheet= XLSX.utils.json_to_sheet(exportData)
    const workbook= XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users")
    XLSX.writeFile(workbook, "users.xlsx")
  }
  catch(e){
    console.error("Download failed", e);

  }
}


