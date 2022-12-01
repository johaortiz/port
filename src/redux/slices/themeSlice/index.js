import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'dark',
};

localStorage.getItem('theme') && (initialState.theme = localStorage.getItem('theme'));


export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            const [type, payload] = action.payload;
            localStorage.setItem(type, payload);
            return { ...state, [type]: payload };
        },
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;