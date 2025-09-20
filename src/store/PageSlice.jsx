import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const PageSlice = createSlice({
    name: 'addPage',
    initialState,
    reducers:{
        setActivePage(state, action){
            return action.payload;
        }
    }
})

export const {setActivePage} = PageSlice.actions;
export const activePageReducer = PageSlice.reducer;

