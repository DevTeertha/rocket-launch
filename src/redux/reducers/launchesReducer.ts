import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const getLaunches: any = createAsyncThunk(
    'launches/getLaunches',
    async () =>
        fetch('https://api.spacexdata.com/v3/launches').then((res) =>
            res.json(),
        ),
);

const launchesSlice = createSlice({
    name: 'Launch Slice',
    initialState: {
        status: null,
        loading: false,
        launches: [],
    },
    reducers: {},
    extraReducers: {
        [getLaunches.pending]: (state: any) => {
            state.status = 'loading';
            state.loading = true;
        },
        [getLaunches.fulfilled]: (
            state: any,
            action: PayloadAction<string>,
        ) => {
            state.status = 'success';
            state.loading = false;
            state.launches = action.payload;
        },
        [getLaunches.rejected]: (state: any) => {
            state.status = 'error';
            state.loading = false;
        },
    },
});
export default launchesSlice.reducer;
