import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsThunk } from './operations';

const initialState = {
	cars: [],
	error: null,
	isLoading: false,
	filter: '',
	favorites: [],
};

const advertsCarsSlice = createSlice({
	name: 'AdvertsCars',
	initialState,
	reducers: {
		setFilter: (state, { payload }) => {
			state.filter = payload;
		},
		addToFavorites: (state, { payload }) => {
			state.favorites.push(payload);
		},
		removeFromFavorites: (state, { payload }) => {
			state.favorites = state.favorites.filter((favorite) => favorite.id !== payload.id);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
				state.cars = payload;
				state.isLoading = false;
			})
			.addCase(fetchCarsThunk.pending, (state, { payload }) => {
				state.isLoading = true;
			})
			.addCase(fetchCarsThunk.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});
export const { setFilter, addToFavorites, removeFromFavorites } = advertsCarsSlice.actions;

export const advertsCarsReducer = advertsCarsSlice.reducer;
