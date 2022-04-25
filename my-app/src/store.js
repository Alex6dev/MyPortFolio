import {configureStore} from "@reduxjs/toolkit";
import userReduce from "./features/user";
export default configureStore({
    reducer:{
        user: userReduce,
    }
})