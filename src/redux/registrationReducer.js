import { createSlice } from '@reduxjs/toolkit'

const intialStateValue = {
    value: []
};
export const registrationSlice = createSlice({
    name: "registration",
    initialState: intialStateValue
    ,
    reducers: {
        register: (state, action) => {
            const newData = {
                ...action.payload,
                id: state.value.length + 1
            }
            state.value.push(newData)
        },
    }
})

export const { register } = registrationSlice.actions;

export default registrationSlice.reducer;