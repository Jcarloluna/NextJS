import { createSlice,configureStore } from '@reduxjs/toolkit';

const initialState = { showModal:false, isLogin:true, isAuthenticated:false}

const credsModalSlice = createSlice({
    name: 'credsModal',
    initialState: initialState,
    reducers: {
        toggleCredsModal(state){
            state.showModal = !state.showModal;
            console.log(state.showModal)
        },
        toggleCredsForm(state){
            state.isLogin = !state.isLogin;
        },
        setAuthentication(state){
            state.isAuthenticated = !state.isAuthenticated;
        }
    }
})

const store = configureStore({
    reducer: {credsModal : credsModalSlice.reducer}
});

export const credsModalActions = credsModalSlice.actions;

export default store;