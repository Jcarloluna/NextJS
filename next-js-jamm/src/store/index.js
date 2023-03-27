import { createSlice,configureStore } from '@reduxjs/toolkit';

const initialState = { showModal:false }

const credsModalSlice = createSlice({
    name: 'credsModal',
    initialState: initialState,
    reducers: {
        toggleCredsModal(state){
            state.showModal = !state.showModal;
            console.log(state.showModal)
        } 
    }
})

const store = configureStore({
    reducer: {credsModal : credsModalSlice.reducer}
});

export const credsModalActions = credsModalSlice.actions;

export default store;