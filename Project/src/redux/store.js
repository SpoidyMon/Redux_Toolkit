import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice'
import collectionReducer from './features/collectionSLice'

export const store=configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer
    }
})