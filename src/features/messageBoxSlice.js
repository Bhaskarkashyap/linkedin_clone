import { createSlice } from "@reduxjs/toolkit";

export const messageBoxSlice = createSlice({
    name: "messageBox",
    initialState: {
        messageBoxIsOpen: false
    },

    reducers: {
        openMessageBox: (state) => {
            state.messageBoxIsOpen = true;
        },

        closeMessageBox: (state) => {
            state.messageBoxIsOpen = false;
        }
    }
})

export const { openMessageBox, closeMessageBox } = messageBoxSlice.actions;

export const selectMessageBoxIsOpen = (state) => state.messageBox.messageBoxIsOpen;

export default messageBoxSlice.reducer;
