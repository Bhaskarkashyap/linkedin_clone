import { configureStore } from "@reduxjs/toolkit";
import messageReducer from '../features/messageBoxSlice';

const store = configureStore({
    reducer: {
        messageBox: messageReducer,
    }
})

export default store