import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Events from "./Events";
import "./Components.css";
import {
  fetchUsers,
  postUsers,
  handleDelete,
  updateUsers,
  onCellValueChanged
} from "../api/integration";

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
      onClick={() => handleDelete(params.data.id, () => fetchUsers(setRowData, setLoading))}
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
    fetchUsers(setRowData, setLoading);
  }, []);



  return (
    <div>
      <Events onSubmit={(userData) => postUsers(userData, setLoading, () => fetchUsers(setRowData, setLoading))} />

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
          onCellValueChanged={(params) => onCellValueChanged(params, setRowData, updateUsers)}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
};

export default Components;
