import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "./Props.css"

const Props = () => {
  const [data, setData]= useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [totalRecords,setTotalRecords]=useState(0)
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    fetchUsers(currentPage, PAGE_SIZE)
  },[currentPage])

const PAGE_SIZE=5
  const fetchUsers=async(pageNo, limit)=>{

    try{
      setLoading(true)
    const res=await fetch(`http://localhost:5000/users/getUser?pageNo=${pageNo}&&limit=${limit}`)


    const response= await res.json()
    
    console.log(response)

    const formattedData = response.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        address: user.address,
        gender: user.gender
      }));

      setData(formattedData)
      setCurrentPage(pageNo)
      setTotalRecords(response.data[0].totalCount)
      setLoading(false)
    }
    catch(error){
      console.log(error)
      setLoading(false)

    }
  }


  return (
   <div className="card">
            <DataTable value={data} 
               rows={PAGE_SIZE} totalRecords={totalRecords} paginator
              lazy paginatorLeft={<button className="p-paginator-prev p-paginator-element p-link" onClick={() => fetchUsers(currentPage - 1, PAGE_SIZE)} disabled={currentPage === 1}>
                <span className="p-paginator-icon pi pi-angle-left"></span>
              </button>}
              paginatorRight={<button className="p-paginator-next p-paginator-element p-link" onClick={() => fetchUsers(currentPage + 1, PAGE_SIZE)} disabled={currentPage * PAGE_SIZE >= totalRecords}>
                <span className="p-paginator-icon pi pi-angle-right"></span>
              </button>}
              loading={loading}>
                <Column field="id" header="ID" sortable="true"></Column>
                <Column field="name" header="Name" sortable="true"></Column>
                <Column field="email" header="Email" sortable="true"></Column>
                <Column field="address" header="Address" sortable="true"></Column>
                <Column field="gender" header="Gender" sortable="true"></Column>
            </DataTable>
        </div>
  )
}

export default Props