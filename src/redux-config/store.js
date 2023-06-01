import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import adminSlice from "./adminSlice";
import adminPostSlice from "./adminPostSlice";
import userPostSlice from "./userPostSlice";

const store = configureStore({
    reducer : {
        allUser : userSlice,
        admin : adminSlice,
        adminPost:adminPostSlice,
        userPosts : userPostSlice
    }
})

export default store;