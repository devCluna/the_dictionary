import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDictionary } from "../../api/getData";

//Thunk Actions
export const getWord = createAsyncThunk("agents/getAgents", async(word)=> fetchDictionary(word))

export const dictionarySlice = createSlice({
    name:'dictionary',
    initialState:{
        wordSearch:{},
        loading: false,
        error:'',
        empty:true
    },  
    extraReducers:{
        [getWord.pending]: (state) => {
            state.loading = true
        },
        [getWord.fulfilled]: (state,action) => {
            state.loading = false
            state.wordSearch = action.payload
            state.empty=false
        },
        [getWord.rejected]: (state) =>{
            state.wordSearch={}
            state.loading = false
            state.error = "Error Requesting"
            state.empty=false
        }
    },
    
})


export default dictionarySlice