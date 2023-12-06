import persistReducer from 'redux-persist/es/persistReducer';
import { advertsCarsReducer } from './cars/slice';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const persistConfig = {
	key: 'cars',
	version: 1,
	storage,
	whitelist: ['favorites'],
};

export const store = configureStore({
	reducer: {
		cars: persistReducer(persistConfig, advertsCarsReducer),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
