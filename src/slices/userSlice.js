import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        uid: null,
        email: null,
        accessToken: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.accessToken = action.payload.accessToken;
        },
        removeUser: (state) => {
            state.uid = null;
            state.accessToken = null;
            state.email = null;
        },
    },
});
export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
