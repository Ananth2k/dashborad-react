import { createSlice } from "@reduxjs/toolkit";


const PageSlice = createSlice({
    name: 'activePage',
    initialState: "Default", // initialized with string for active page
    reducers: {
        setActivePage(state, action) {
            return action.payload;
        }
    }
});

const MenuSlice = createSlice({
    name: 'menuOpen',
    initialState: true,
    reducers: {
        setMenuState(state, action) {
            return action.payload;
        }
    }
});

const NotificationSlice = createSlice({
    name: 'notificationOpen',
    initialState: false,
    reducers: {
        setNotification(state, action) {
            return action.payload;
        }
    }
});

export const { setActivePage } = PageSlice.actions;
export const activePageReducer = PageSlice.reducer;

export const { setMenuState } = MenuSlice.actions;
export const menuReducer = MenuSlice.reducer;

export const { setNotification } = NotificationSlice.actions;
export const notificationReducer = NotificationSlice.reducer;
