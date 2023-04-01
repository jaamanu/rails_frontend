import { configureStore } from "@reduxjs/toolkit";
import greetingSlice from "./greeting/greeting";

const store = configureStore({
    reducer: {
        greetings: greetingSlice,
    },
});

export default store;