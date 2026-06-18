import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../api/integration";

const fetchUserSlice = createSlice({
    name:"fetchUser",
    initialState:{
        users:[],
        loading:false,
        error:null,
        count:0
    },
    reducers:{
         resetFetchRows:(state,action)=>{
            state.users = []
            state.count = 0
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            // API returns { data: [...], count: number }
            state.users = action.payload?.data || []
            state.count = action.payload?.count ?? action.payload?.data?.length ?? 0
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })
    }
})

export const {resetFetchRows}=fetchUserSlice.actions
export default fetchUserSlice.reducer

