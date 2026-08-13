import React, { useEffect, useState,useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { AgGridReact } from "ag-grid-react";
import {useSelector,useDispatch} from "react-redux";

import Events from "./Events";
import "../assets/download.png"
import "./Components.css";
import {
  fetchUsers,
  postUsers,
  handleDelete,
  updateUsersThunk,
  onCellValueChanged,
  downloadExcel
} from "../api/integration";

const Components = () => {
   const [rowData, setRowData] = useState([]);
   const gridRef = useRef(null); 
   let [loader, setLoading] = useState(false);
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
    <div className="form-table-layout">
      <div className="form-panel">
        <Events
          loader={loader}
          onSubmit={(userData) =>
            postUsers(userData, setLoading, () => dispatch(fetchUsers()))
          }
        />
      </div>

      <div
        className="table-panel ag-theme-alpine custom-grid"
        style={{ height: "650px", width: "80%", marginTop: 20 }}
      >
        <div className="downloadPanel">
          <button className="downloadbutton" onClick={downloadExcel}>
           <img src={require("../assets/download.png")} alt="Download" style={{height:"20px", width:"28px"}} /> 
          </button>
        </div>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowHeight={50}
          headerHeight={50}
          singleClickEdit={true}
          stopEditingWhenCellsLoseFocus={true}
          onCellValueChanged={(params) =>
            onCellValueChanged(params, setRowData, (updatedRows) => dispatch(updateUsersThunk(updatedRows)))
          }
          pagination={true}
          paginationPageSize={10}
          onGridReady={(params) => {
            gridRef.current = params.api;
          }}
        />
      </div>
    </div>
  );
};

export default Components;
