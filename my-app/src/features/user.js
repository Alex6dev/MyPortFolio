import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:'user',
    initialState:{
        firstVisit:true,
    },
    reducers:{
        changeVisit:(state)=>{
            return{
                ...state,
                firstVisit:false
            }
        }
    }
})
const {actions,reducer}= userSlice;
export const {changeVisit}= actions;
export default reducer 