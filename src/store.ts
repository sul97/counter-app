import {configureStore }from  "@reduxjs/toolkit";
import counterSlice  from './components/counterSlice'

export type RootState = {
    counterR: ReturnType<typeof counterSlice>
}
export const store =configureStore({
    reducer:{
        counterR:counterSlice,
    },
});