import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/CounterSLice'

// This is the global store
export const store=configureStore({
    reducer:{
        //connecting feature to its slice 
        counter:counterReducer

    }
})