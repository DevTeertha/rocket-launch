import { configureStore } from '@reduxjs/toolkit';
import launchesReducer from './reducers/launchesReducer';

const store = configureStore({
    reducer: {
        launches: launchesReducer,
    },
});
export default store;
