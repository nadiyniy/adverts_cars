import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsThunk } from './operations';

const initialState = {
	cars: [],
	error: null,
	isLoading: false,
	favorites: [],
};

const advertsCarsSlice = createSlice({
	name: 'AdvertsCars',
	initialState,
	reducers: {
		setFilter: (state, { payload }) => {
			state.filter = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
			state.cars = payload;
		});
	},
});
export const { setFilter } = advertsCarsSlice.actions;

export const advertsCarsReducer = advertsCarsSlice.reducer;
