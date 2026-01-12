import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "./Props.css"

const Props = () => {
  const [data, setData]= useState([])

  useEffect(()=>{
    fetchUsers()
  },[])


  const fetchUsers=async()=>{

    try{
    const res=await fetch("https://jsonplaceholder.typicode.com/users")

    const response= await res.json()


    const formattedData = response.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.address.city,
      }));

      setData(formattedData)
    }
    catch(error){
      console.log(error)
    }
  }


  return (
   <div className="card">
            <DataTable value={data} className="p-datatable-gridlines"
              paginator rows={5}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" 
               currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
            >
                <Column field="id" header="ID" sortable="true"></Column>
                <Column field="name" header="Name" sortable="true"></Column>
                <Column field="email" header="Email" sortable="true"></Column>
                <Column field="city" header="City" sortable="true"></Column>
            </DataTable>
        </div>
  )
}

export default Props