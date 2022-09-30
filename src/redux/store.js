import { configureStore } from '@reduxjs/toolkit'
import dictionarySlice from './states/dictionary'

export default configureStore({
    reducer:{
        dictionary: dictionarySlice.reducer
    }
})
