import React, { useEffect, useState,useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { AgGridReact } from "ag-grid-react";
import {useSelector,useDispatch} from "react-redux";

import Events from "./Events";
import "./Components.css";
import {
  fetchUsers,
  postUsers,
  handleDelete,
  updateUsersThunk,
  onCellValueChanged
} from "../api/integration";

const Components = () => {
   const [rowData, setRowData] = useState([]);
   const gridRef = useRef(null); 
   const [loader, setLoading] = useState(false);
  const {users,loading,count}=useSelector((state)=>state.fetchUser)
  //const { editloading, success, errorMsg } = useSelector(state => state.updateUser);
  const dispatch=useDispatch()
  const [visible, setVisible] = useState(false);

  const columnDefs = [
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
          handleDelete(params.data.id,()=>dispatch(fetchUsers()))
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
    dispatch(fetchUsers());
  }, [dispatch]);

  // keep local rowData in sync with users from Redux
  useEffect(() => {
    if (users && users.length) setRowData(users.map(u => ({ ...u })));
    else setRowData([]);
  }, [users]);



  return (
    <div>
      <Events onSubmit={(userData) =>postUsers(userData,setLoading,
      () => dispatch(fetchUsers())
    )
  }
/>
            <Button  className="p-button" label="Show Table" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Form Table" visible={visible} style={{ width: "60vw" }} onHide={() => {if (!visible) return; setVisible(false); }}>
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
          onCellValueChanged={(params) => onCellValueChanged(params, setRowData, (updatedRows) => dispatch(updateUsersThunk(updatedRows)))}
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
          onCellValueChanged={(params) => onCellValueChanged(params, setRowData, (updatedRows) => dispatch(updateUsersThunk(updatedRows)))}
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
