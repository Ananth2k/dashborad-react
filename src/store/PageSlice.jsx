import { createSlice } from "@reduxjs/toolkit";


const PageSlice = createSlice({
    name: 'addPage',
    initialState:{},
    reducers:{
        setActivePage(state, action){
            return action.payload;
        }
    }
})

const MenuSlice = createSlice({
    name : 'openMenu',
    initialState:true,
    reducers:{
        setMenuState(state, action){
            return action.payload
        }
    }
})

const NotificationSlice = createSlice({
    name:'openNotification',
    initialState:false,
    reducers:{
        setNotification(state, action){
            return action.payload
        }
    }
})

export const {setActivePage} = PageSlice.actions;
export const activePageReducer = PageSlice.reducer;

export const {setMenuState} = MenuSlice.actions;
export const menuReducer = MenuSlice.reducer;

export const {setNotification} = NotificationSlice.actions;
export const nofiticationReducer = NotificationSlice.reducer;