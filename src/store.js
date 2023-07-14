import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./redux/registrationReducer";

const store = configureStore({
    reducer: {
        registrations: registrationReducer,
    }
})

export default store;