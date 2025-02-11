import { configureStore } from '@reduxjs/toolkit';
import visibilityReducer from './CrackerSlice';

const store = configureStore({
  reducer: {
    visibility: visibilityReducer,
  },
});

export default store;