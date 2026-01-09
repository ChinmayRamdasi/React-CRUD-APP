import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Events from "./Events";
import "./Components.css";

const Components = () => {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);

  const columnDefs = [
    { headerName: "ID", field: "id"},
    { headerName: "Name", field: "name", editable: true},
    { headerName: "Address", field: "address", editable: true},
   {
  headerName: "Actions",
  field: "actions",
  width: 100,
  cellRenderer: (params) => (
    <span
      style={{
        cursor: "pointer",
        color: "red",
        fontSize: "18px"
      }}
      onClick={() => handleDelete(params.data.id)}
      title="Delete"
    >
      🗑️
    </span>
  )
}

  ];

  const defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  const handleDelete=async (id)=>{
    try{
    await fetch("http://localhost:5000/users/deleteUser",{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({id})
    })

    fetchUsers()
    }
    catch(e){
      console.log(e)
    }
  }

  // 🔹 GET
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/users/getUser");
      const data = await res.json();

      setRowData(
        data.data.map((u) => ({
          id: u.id,
          name: u.name,
          address: u.address
        }))
      );
    } catch (e) {
      console.error("Fetch failed", e);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 POST
  const postUsers = async ({ name, address }) => {
    try {
      setLoading(true);
      await fetch("http://localhost:5000/users/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, address })
      });
      await fetchUsers();
    } catch (e) {
      console.error("Create failed", e);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 UPDATE (ONLY CHANGED FIELDS)
  const updateUsers = async ({id, name, address}) => {
  

   // console.log("UPDATE PAYLOAD:", payload);

    await fetch("http://localhost:5000/users/updateUser", {
      method: "PUT", // preferred
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({id,name,address})
    });
  };

  // 🔹 AG GRID EDIT HANDLER
 const onCellValueChanged = async (params) => {
  const updatedrows = params.data;
  // const oldData = params.oldData;

  // optimistic UI update
  setRowData((prev) =>
    prev.map((row) =>
      row.id === updatedrows.id ? updatedrows : row
    )
  );

  try {
    await updateUsers(updatedrows);
  } catch (e) {
    console.error("Update failed", e);

    // rollback safely
    params.node.setData(params.oldData);
  }
};


  return (
    <div>
      <Events onSubmit={postUsers} />

      {loading && <p>Loading...</p>}

      <div
        className="ag-theme-alpine custom-grid"
        style={{ height: "400px", width: "100%", marginTop: 20 }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          singleClickEdit={true}
          stopEditingWhenCellsLoseFocus={true}
          onCellValueChanged={onCellValueChanged}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
};

export default Components;
