import { createSlice } from "@reduxjs/toolkit";
import { updateUsersThunk } from "../api/integration";
// Redux slice for managing user update state
const updateUserSlice = createSlice({
    name: "updateUser",
    initialState: {
        editloading: false,
        success: false,
        errorMsg: "",
        name: "",
        address: "",
        email: "",
        gender: ""
    },

    reducers: {
        setUpdateFields: (state, action) => {
            state.name = action.payload.name;
            state.address = action.payload.address;
            state.email = action.payload.email;
            state.gender = action.payload.gender;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(updateUsersThunk.pending, (state) => {
                state.editloading = true;
                state.errorMsg = "";
                state.success = false;
            })
            .addCase(updateUsersThunk.fulfilled, (state, action) => {
                state.editloading = false;
                state.success = true;
                state.errorMsg = "";

                // Example: update state from API response
                if (action.payload) {
                    state.name = action.payload.name;
                    state.address = action.payload.address;
                    state.email = action.payload.email;
                    state.gender = action.payload.gender;
                }
            })
            .addCase(updateUsersThunk.rejected, (state, action) => {
                state.editloading = false;
                state.success = false;
                state.errorMsg = action.error.message || "Something went wrong";
            });
    }
});

export const { setUpdateFields } = updateUserSlice.actions;
export default updateUserSlice.reducer;