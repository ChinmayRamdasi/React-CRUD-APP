import React, { useEffect, useState,useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
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
  const gridRef = useRef(null); 
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const columnDefs = [
    { headerName: "ID", field: "id", width: 80},
    { headerName: "Name", field: "name", editable: true, filter:'agTextColumnFilter'},
    { headerName: "Address", field: "address", editable: true, filter:'agTextColumnFilter'},
    {headerName: "Email", field: "email", editable: true, filter:'agTextColumnFilter'},
    {headerName:"Gender", field:"gender",filter:'agTextColumnFilter'},
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
      onClick={() => {
        const confirmDelete = window.confirm(
          `Are you sure you want to delete user with ID ${params.data.id}?`
        );

        if(confirmDelete){
          handleDelete(params.data.id,()=>fetchUsers(setRowData,setLoading,gridRef))
        }
      }}
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
    filter: true,
    floatingFilter: true,
  };

  useEffect(() => {
    fetchUsers(setRowData, setLoading, gridRef);
  }, []);



  return (
    <div>
      <Events onSubmit={(userData) =>postUsers(userData,setLoading,
      () => fetchUsers(setRowData, setLoading, gridRef)
    )
  }
/>
            <Button  className="p-button" label="Show Table" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Form Table" visible={visible} style={{ width: '70vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
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
          onGridReady={(params)=>{
            gridRef.current=params.api;
          }}
        />
              </div>
            </Dialog>
      
      {/* <div
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
          onGridReady={(params)=>{
            gridRef.current=params.api;
          }}
        />
      </div> */}
    </div>
  );
};

export default Components;
